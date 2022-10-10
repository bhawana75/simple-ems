import React from "react";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = () => {
  const data = [
    { date: "2021-07-11", salescount: 53 },
    { date: "2021-07-12", salescount: 42 },
    { date: "2021-07-13", salescount: 88 },
    { date: "2021-07-14", salescount: 14 },
    { date: "2021-07-15", salescount: 77 },
    { date: "2021-07-16", salescount: 68 },
    { date: "2021-07-17", salescount: 43 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Total Sales Count of Software</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="salescount"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <LineChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          lineSize={20}
        >
          <XAxis
            dataKey="date"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line dataKey="salescount" fill="#8884d8" background={{ fill: "#eee" }} />
        </LineChart>
        <BarChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="date"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="salescount" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
