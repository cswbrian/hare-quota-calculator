import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SCENARIOS from "./data/scenarios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function App() {
  const [scenario, setScenario] = useState(() => Object.values(SCENARIOS)[0]);
  const { register, getValues, setValue } = useForm();

  useEffect(() => {
    setValue(scenario.candidates_list.map(c => ({[c.first_candidate_name_zh]: c.votes})))
    getResult();
  }, [scenario.name_zh]);

  const getResult = () => {
    const values = getValues();
    const tempList = scenario.candidates_list.map((li, i) => {
      return {
        ...li,
        votes: +values[li.first_candidate_name_zh],
      };
    });
    const totalVotes = tempList.reduce((a, c) => a + c.votes, 0);
    const hareQuota = totalVotes / scenario.seats;

    let totalSurplusSeats = scenario.seats;

    // First Round - Each party is first allocated a number of seats equal to their integer
    const firstRoundResult = tempList.map((li) => {
      const votesPerQuota = li.votes / hareQuota;
      const automaticSeats = Math.min(li.candidates, Math.floor(votesPerQuota));

      totalSurplusSeats -= automaticSeats;
      return {
        ...li,
        votesPerQuota,
        automaticSeats,
        remainder: votesPerQuota - automaticSeats,
      };
    });

    firstRoundResult
      .sort((a, b) => {
        if (b.remainder > a.remainder) return 1;
        if (b.remainder < a.remainder) return -1;

        if (b.votes > a.votes) return 1;
        if (b.votes < a.votes) return -1;

        return 0
      })
      .forEach((item) => {
        if (totalSurplusSeats <= 0 || item.candidates === item.automaticSeats) {
          item.surplusSeats = 0;
        } else {
          item.surplusSeats = 1;
          totalSurplusSeats--;
        }
      });

    const result = firstRoundResult
      .sort((a, b) => a.number - b.number)
      .map((li, i) => ({
        ...li,
        seats: li.automaticSeats + li.surplusSeats,
      }));

    setScenario(scenario => ({
      ...scenario,
      candidates_list: result,
    }));
  };

  const { name_zh, seats, candidates_list } = scenario;

  return (
    <Container>
      {Object.values(SCENARIOS).map((s, i) => (
        <Button
          key={i}
          variant="contained"
          onClick={() => {
            setScenario(s);
          }}
        >
          {s.name_zh}
        </Button>
      ))}
      <Typography variant="h6">{name_zh}</Typography>
      <Typography variant="body1">
        總有效票數：{candidates_list.reduce((a, c) => a + c.votes, 0)}
      </Typography>
      <Typography variant="body1">議席：{seats}</Typography>
      <form>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>-</TableCell>
                <TableCell align="right">得票／餘額</TableCell>
                <TableCell align="right">自動分配</TableCell>
                <TableCell align="right">餘額</TableCell>
                <TableCell align="right">餘席</TableCell>
                <TableCell align="right">議席</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates_list.map((li, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="outlined"
                      label={`${i + 1}. ${li.first_candidate_name_zh}`}
                      key={i}
                      onChange={() => getResult()}
                      type="number"
                      name={li.first_candidate_name_zh}
                      defaultValue={li.votes}
                      placeholder={`list ${i + 1}`}
                      inputRef={register({ required: true, min: 0 })}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {Number.parseFloat(li.votesPerQuota).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{li.automaticSeats}</TableCell>
                  <TableCell align="right">
                    {Number.parseFloat(li.remainder).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{li.surplusSeats}</TableCell>
                  <TableCell align="right">
                    {li.seats} / {li.candidates}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Container>
  );
}
