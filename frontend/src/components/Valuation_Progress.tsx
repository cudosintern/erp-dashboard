import { useEffect, useState } from "react";
import axios from "axios";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function Valuation_Progress() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exam/7")
      .then((res) => setData(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = [
    {
      name: "Progress",
      value: data.value,
      fill: "#3b82f6"
    }
  ];

  return (
    <div style={{ width: 300, height: 300 }}>
      <h3>Valuation Progress</h3>

      <RadialBarChart
        width={300}
        height={300}
        innerRadius="70%"
        outerRadius="100%"
        data={chartData}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[data.min, data.max]}
          tick={false}
        />

        <RadialBar dataKey="value" cornerRadius={10} />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {data.value}%
        </text>
      </RadialBarChart>
    </div>
  );
}