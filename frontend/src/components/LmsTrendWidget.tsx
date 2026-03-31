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

export default function LmsTrendWidget() {
  const [data, setData] = useState<any[]>([]);
  const [type, setType] = useState("student");

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/lms/5?type=${type}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Score Trend Over Time
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mb-4">
        Performance Progress
      </p>

      {/* Filter */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mb-4 rounded"
      >
        <option value="student">Student</option>
        <option value="course">Course</option>
      </select>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}