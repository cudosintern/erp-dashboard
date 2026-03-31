import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function FeeWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/fee/3")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-4xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">
        Fee Target vs Actual
      </h2>
        
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* X Axis */}
          <XAxis dataKey="group" />

          {/* Y Axis */}
          <YAxis />

          {/* Tooltip */}
          <Tooltip />

          {/* Legend */}
          <Legend />

          {/* Target */}
          <Bar dataKey="v1" fill="#3b82f6" name="Target" />
          {/* Actual */}
          <Bar dataKey="v2" fill="#22c55e" name="Actual" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}