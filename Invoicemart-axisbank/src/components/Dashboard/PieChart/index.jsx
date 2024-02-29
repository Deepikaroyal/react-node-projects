import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

class PieRechartComponent extends React.Component {
  COLORS = ["#AC4371", "#C17294", "#97144D"];

  pieData = [
    {
      name: "Micro",
      value: 68.85,
    },
    {
      name: "Small",
      value: 7.91,
    },
    {
      name: "Medium",
      value: 6.85,
    },
  ];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <PieChart
        width={230}
        height={300}
        style={{ marginTop: "-40px", marginLeft: "-20px" }}
      >
        <Pie
          data={this.pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
        >
          {this.pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={this.COLORS[index % this.COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<this.CustomTooltip />} />
      </PieChart>
    );
  }
}

export default PieRechartComponent;
