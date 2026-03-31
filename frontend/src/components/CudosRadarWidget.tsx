import { useEffect, useState } from "react";
import axios from "axios";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CudosRadarWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cudos/3")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 bg-blue-950 rounded-2xl shadow-md">
      <h2 className="text-lg text-amber-50 font-semibold mb-4">
        PO / PEO Attainment (Radar)
      </h2>
        <select className="border bg-amber-50 p-2 mb-4">
            <option>Batch 2023</option>
            <option>Batch 2024</option>
        </select>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />

          {/* Axis labels */}
          <PolarAngleAxis dataKey="subject" />

          {/* Scale */}
          <PolarRadiusAxis angle={30} domain={[0, 100]} />

          {/* Radar */}
          <Radar
            name="Attainment"
            dataKey="score"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />

          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}