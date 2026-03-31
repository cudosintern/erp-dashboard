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

export default function AdmissionIntakeWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admission/7")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-stone-800 rounded-2xl shadow-md w-full">
      <h2 className="text-lg text-amber-50 font-semibold mb-4">
        Intake vs Admitted
      </h2>

      <ResponsiveContainer width="100%" height={300}>
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

          {/* Capacity */}
          <Bar dataKey="v1" fill="#0ea5e9  " name="Capacity" />

          {/* Filled */}
          <Bar dataKey="v2" fill="#f43f5e   " name="Admitted" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}