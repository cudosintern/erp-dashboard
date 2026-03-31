import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Exam_Fee_Collected() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exam/10")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Exam Fee: Collected vs Pending</h2>

      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="group" />
        <YAxis />

        <Tooltip />
        <Legend />

        {/* Collected */}
        <Bar dataKey="v1" fill="#22c55e" name="Collected" />

        {/* Pending */}
        <Bar dataKey="v2" fill="#ef4444" name="Pending" />
      </BarChart>
    </div>
  );
}