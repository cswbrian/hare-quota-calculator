import React, { useState, useEffect, useRef } from "react";
import { select, scaleLinear, stack, stackOffsetNone } from "d3";

const colors = ["b33040", "#d25c4d", "#ddd"];
const order = ['automaticVotes', 'surplusVotes', 'unusedVotes']

const transformData = (data) => {
  const { votes, votesPerQuota, automaticSeats, surplusSeats } = data;
  const automaticVotes = Math.ceil(votes / votesPerQuota);
  const surplusVotes = surplusSeats
    ? automaticSeats
      ? votes - automaticVotes
      : votes
    : 0;

  return {
    automaticVotes: automaticSeats ? automaticVotes : 0,
    surplusVotes,
    unusedVotes: surplusSeats
      ? 0
      : automaticSeats
        ? votes - automaticVotes
        : votes,
  };
};

export default function MyVisComponent(props) {
  const { data, max } = props;
  const svgRef = useRef(null);
  const width = 300
  //   const [transformedData, setTransformedData] = useState(transformData(data));
  useEffect(() => {
    if (!isNaN(data.seats)) {
      // Ensure result is calcalated
      const svg = select(svgRef.current);

      const xScale = scaleLinear().domain([0, max]).range([0, width]);

      const stackF = stack()
      .keys([...Object.keys(transformData(data))])
      .offset(stackOffsetNone);
      const series = stackF([transformData(data)])

      console.log(max)
      console.log(series)

      svg
        .selectAll(".bar")
        .data(series)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d[0][0]))
        .attr("width", d => xScale(d[0][1]) - xScale(d[0][0]))
        .attr("height", 30)
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .style("fill", function(d, i) { return colors[i]; });
    }
  }, [data.seats]);

  return (
    <svg
      // viewBox="0 0 300 50"
      style={{
        border: "2px solid gold",
      }}
      ref={svgRef}
    />
  );
}
