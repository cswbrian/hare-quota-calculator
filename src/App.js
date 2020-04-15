import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const LIST = [
  {
    camp: "A",
    candidates: 2,
    votes: 1500,
  },
  {
    camp: "B",
    candidates: 2,
    votes: 1500,
  },
  {
    camp: "C",
    candidates: 2,
    votes: 900,
  },
  {
    camp: "D",
    candidates: 2,
    votes: 500,
  },
  {
    camp: "E",
    candidates: 2,
    votes: 500,
  },
  {
    camp: "F",
    candidates: 2,
    votes: 200,
  },
];

const SEATS = 25;

export default function App() {
  const [list, setList] = useState(LIST);
  const { register, handleSubmit, getValues } = useForm();

  useEffect(() => {
    getResult();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  const getResult = () => {
    const values = getValues();
    const tempList = list.map((li, i) => {
      return {
        ...li,
        votes: +values[`list-${i + 1}`],
      };
    });
    const totalVotes = tempList.reduce((a, c) => a + c.votes, 0);
    const hareQuota = totalVotes / SEATS;

    let totalSurplusSeats = SEATS;
    const firstRoundResult = tempList.map((li) => {
      const votesPerQuota = li.votes / hareQuota;
      const automaticSeats = Math.floor(votesPerQuota);
      totalSurplusSeats -= automaticSeats;
      return {
        ...li,
        votesPerQuota,
        automaticSeats,
        remainder: votesPerQuota - automaticSeats,
      };
    });

    const lowestRemainder = firstRoundResult
      .map((r) => r.remainder)
      .sort((a, b) => b - a)[totalSurplusSeats - 1]

    const secondResult = firstRoundResult.map((li, i) => {
      const surplusSeats = li.remainder >= lowestRemainder ? 1 : 0;
      return {
        ...li,
        surplusSeats,
        seats: li.automaticSeats + surplusSeats,
      };
    });

    setList(secondResult);
  };

  return (
    <Container>
      <Typography variant="h6">
        Total Votes: {list.reduce((a, c) => a + c.votes, 0)}
      </Typography>
      <Typography variant="h6">Seats: {SEATS}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>-</TableCell>
                <TableCell align="right">Votes/Quota</TableCell>
                <TableCell align="right">Auto Seats</TableCell>
                <TableCell align="right">Remainder</TableCell>
                <TableCell align="right">Surplus</TableCell>
                <TableCell align="right">Seats</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((li, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="outlined"
                      label={`List ${i + 1}`}
                      key={i}
                      onChange={(e) => getResult(e)}
                      type="number"
                      name={`list-${i + 1}`}
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
                  <TableCell align="right">{li.seats}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Container>
  );
}
