/* eslint-disable */
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

const data = [
  {
    projectedProfit: 250000,
    color: "#97144D",
    Text: "1",
  },
  {
    projectedProfit: 50000,
    color: "#AC4371",
    Text: "2",
  },
  {
    projectedProfit: 750000,
    color: "#C17294",
    Text: "3",
  },
  {
    projectedProfit: 1000000,
    color: "#E0B9CA",
    Text: "4",
  },
  {
    projectedProfit: 250000,
    color: "#EAD0DB",
    Text: "5",
  },
  {
    projectedProfit: 500000,
    Text: "6",
    color: "#E2E2E2",
  },
];

class CustomizedLabel extends React.Component {
  render() {
    const { x, y, fill, value } = this.props;
    return (
      <text
        // x={x}
        y={y}
        dy={-4}
        fontSize="16"
        fontFamily="sans-serif"
        fill={fill}
        textAnchor="middle"
        style={{ fontSize: "10px" }}
      >
        {value}
      </text>
    );
  }
}

function App() {
  return (
    <div className="app">
      <div className="main" style={{ margin: "20px 35px" }}>
        <BarChart
          width={150}
          height={250}
          data={data}
          margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
          fontSize={10}
        >
          <XAxis dataKey="Text" fontFamily="sans-serif" tickSize dy="25" />
          <YAxis hide />
          <Bar
            dataKey="projectedProfit"
            barSize={10}
            fontFamily="sans-serif"
            label={<CustomizedLabel />}
          >
            {data.map((entry, index) => (
              <Cell fill={data[index].color} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}

export default App;
