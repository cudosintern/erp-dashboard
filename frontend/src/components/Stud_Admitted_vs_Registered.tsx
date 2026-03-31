import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function Stud_Admitted_vs_Registered() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/exam/1")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Students Admitted vs Registered
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="group" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Admitted */}
          <Bar dataKey="v1" fill="#3b82f6" name="Admitted" />

          {/* Registered */}
          <Bar dataKey="v2" fill="#22c55e" name="Registered" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}