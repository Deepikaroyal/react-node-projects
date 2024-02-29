import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

class AreaRechartComponent extends React.Component {
  data = [
    {
      name: "12/Jan",
      "Product A": 3432,
      "Procuct B": 2342,
    },
    {
      name: "12/Feb",
      "Product A": 2342,
      "Procuct B": 3246,
    },
    {
      name: "12/Mar",
      "Product A": 4665,
      "Procuct B": 4556,
    },
    {
      name: "12/Apr",
      "Product A": 4665,
      "Procuct B": 4556,
    },
    {
      name: "12/May",
      "Product A": 4665,
      "Procuct B": 4556,
    },
  ];

  render() {
    return (
      <div style={{ marginLeft: "-10px" }}>
        <AreaChart
          width={289}
          height={100}
          data={this.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv">
              <stop offset="5%" stopColor="#97144D" />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="5 5 " />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Product A"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    );
  }
}

export default AreaRechartComponent;
