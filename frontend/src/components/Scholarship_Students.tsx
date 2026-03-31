import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// ✅ Type definition
type ScholarshipData = {
  category: string;
  value: number;
};

export default function Scholarship_Students() {
  const [data, setData] = useState<ScholarshipData[]>([]);

  useEffect(() => {
    axios
      .get<ScholarshipData[]>("http://localhost:5000/api/admission/4")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Students Applied for Scholarships</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="category" />
          <YAxis />

          <Tooltip />

          {/* Single Bar */}
          <Bar dataKey="value" fill="#3b82f6" name="Students" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}