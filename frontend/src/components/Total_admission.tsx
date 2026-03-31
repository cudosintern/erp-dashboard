import { useEffect, useState } from "react";
import axios from "axios";

export default function TotalAdmissionCard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admission/1")
      .then((res) => setData(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!data)
    return <p className="p-4 text-gray-500">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-64 hover:shadow-xl transition">

      <p className="text-gray-500 text-sm">{data.label}</p>

      <h1 className="text-4xl font-bold text-blue-600 mt-2">
        {data.value}
      </h1>

      <p className="text-xs text-gray-400 mt-1">
        Total Admissions
      </p>

    </div>
  );
}