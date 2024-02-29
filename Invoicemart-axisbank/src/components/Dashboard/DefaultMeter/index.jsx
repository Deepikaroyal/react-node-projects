/* eslint-disable */
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#97144D", "#AC4371", "#C17294", "#E0B9CA"];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div style={{ height: "200px", marginTop: "-140px" }}>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          //activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={40}
          outerRadius={60}
          fill="#C17294"
          // dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
export default App;
