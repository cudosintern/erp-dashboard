import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#ef4444"]; // green, red

export default function CudosWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cudos/4")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
      <div className="flex justify-center items-center">
    <div className="p-4 bg-white rounded-2xl shadow-md w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-4">
        CUDOS Completion
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}   // 👉 makes it DONUT
            outerRadius={90}
            paddingAngle={5}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}