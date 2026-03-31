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

export default function AdmissionTrendWidget() {
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState("rank"); // 👈 default

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/admission/3?type=${filter}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [filter]); // 👈 runs when filter changes

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">
        Admission Trend
      </h2>

      {/* 🔽 DROPDOWN */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4 rounded"
      >
        <option value="rank">Rank</option>
        <option value="region">Region</option>
        <option value="gender">Gender</option>
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
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}