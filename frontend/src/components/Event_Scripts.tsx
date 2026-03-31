import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Event_Scripts() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dvs/1")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">
        Event-wise Scripts (Scanned vs Mapped)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="group" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Scanned */}
        <Bar dataKey="scanned" fill="#3c82f6" />

          {/* Mapped */}
        <Bar dataKey="mapped" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}