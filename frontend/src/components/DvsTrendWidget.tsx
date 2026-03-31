import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function DvsTrendWidget() {
  const [data, setData] = useState<any[]>([]);
  const [course, setCourse] = useState("all");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/dvs/2?course=${course}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [course]);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">
        Coursewise Evaluation Trend
      </h2>

      {/* 🔥 FILTER */}
      <select
        className="border p-2 mb-4 rounded"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="all">All Courses</option>
        <option value="cs">CS</option>
        <option value="it">IT</option>
      </select>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}