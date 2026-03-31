import { useEffect, useState } from "react";
import axios from "axios";

export default function CancelledAdmissionsWidget() {
  const [data, setData] = useState<any[]>([]);
  const [startDate, setStartDate] = useState("2023-01");
  const [endDate, setEndDate] = useState("2023-03");

  const fetchData = () => {
    axios
      .get(
        `http://127.0.0.1:8000/api/admission/9?start_date=${startDate}&end_date=${endDate}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">
        Cancelled Admissions
      </h2>

      {/* Date Filters */}
      <div className="flex gap-2 mb-4">
        <input
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Apply
        </button>
      </div>

      {/* KPI */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-gray-500 text-sm">
          {data[0].label}
        </h2>

        <p className="text-4xl font-bold text-red-500 mt-2">
          {data[0].value}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {startDate} → {endDate}
        </p>
      </div>

    </div>
  );
}