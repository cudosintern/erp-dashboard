import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function Admissions_by_Date_Range() {
  const [data, setData] = useState<any[]>([]);
  const [start, setStart] = useState("2024-01-01");
  const [end, setEnd] = useState("2024-02-28");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/admission/2?start=${start}&end=${end}`
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Admissions by Branch
      </h2>

      {/* 📅 Date Filters */}
      <div className="flex gap-2 mb-4">
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Filter
        </button>
      </div>

      {/* 📊 Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}