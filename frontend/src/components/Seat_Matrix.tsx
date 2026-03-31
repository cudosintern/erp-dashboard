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

export default function Seat_Matrix() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admission/8")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">
        Seat Matrix (Branch-wise)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="branch" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Filled Seats */}
        <Bar dataKey="filled" fill="#22c55e" />
          {/* Available Seats */}
        <Bar dataKey="available" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}