import { useEffect, useState } from "react";
import axios from "axios";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CO_PO_Strength() {
  const [data, setData] = useState<any[]>([]);
  const [batch, setBatch] = useState("2022");

  const fetchData = async (selectedBatch: string) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/cudos/2/${selectedBatch}`
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(batch);
  }, [batch]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        CO-PO Strength (Batchwise)
      </h2>

      {/* 🎯 Batch Selector */}
      <select
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
        className="mb-4 border p-2 rounded"
      >
        <option value="2022">Batch 2022</option>
        <option value="2023">Batch 2023</option>
      </select>

      {/* 📊 Radar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip />

          <Radar
            name="Score"
            dataKey="score"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}