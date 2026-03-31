import { useEffect, useState } from "react";
import axios from "axios";

// ✅ Type
type KpiData = {
  label: string;
  value: number;
};

export default function Performance_Score() {
  const [data, setData] = useState<KpiData[]>([]);

  useEffect(() => {
    axios
      .get<KpiData[]>("http://localhost:5000/api/lms/1")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        width: 250,
        padding: 20,
        borderRadius: 12,
        background: "#f1f5f9",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>LMS Performance</h3>

      {data.map((item) => (
        <div key={item.label}>
          <p style={{ fontSize: 14, color: "#64748b" }}>
            {item.label}
          </p>

          <h1 style={{ fontSize: 32, color: "#3b82f6" }}>
            {item.value}%
          </h1>
        </div>
      ))}
    </div>
  );
}