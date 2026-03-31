import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// ✅ Define type
type CourseData = {
  category: string;
  value: number;
};

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function Courses_Count() {
  // ✅ Apply type here
  const [data, setData] = useState<CourseData[]>([]);

  useEffect(() => {
    axios
      // ✅ Type API response
      .get<CourseData[]>("http://localhost:5000/api/cudos/1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Course Type Breakdown</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="category"
          innerRadius={60}
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.category}   // ✅ better key (no warning)
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}