import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import '../app/index.css'
export default function ReadmittedStudentsWidget() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/admission/readmitted-students")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admission/3") // 👈 mock API
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }} >
      <h1 className="text-2xl">Readmitted Students</h1>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}