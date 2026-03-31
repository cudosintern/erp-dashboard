import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function Fee_Collection_Trend() {
  const [data, setData] = useState<any[]>([]);
  const [type, setType] = useState("week"); // default

  // ✅ FUNCTION DEFINED HERE
  const fetchData = async (selectedType: string) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/fee/1/${selectedType}`
      );
      setData(res.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  // ✅ CALL ON LOAD
  useEffect(() => {
    fetchData(type);
  }, [type]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Fee Collection Trend
      </h2>

      {/* ✅ DROPDOWN */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mb-4 border p-2 rounded"
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="day">Day</option>
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
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}