import { useEffect, useState } from "react";
import axios from "axios";

export default function Fee_Pending() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fees/2")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 space-y-6">

      {/* ✅ KPI Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-64">
        <p className="text-gray-500 text-sm">Pending</p>
        <h1 className="text-4xl font-bold text-red-500 mt-2">
          ₹ {data.totalPending.toLocaleString()}
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Fee Pending After Due Date
        </p>
      </div>

      {/* ✅ Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">
          Student Pending Fees
        </h2>

        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Section</th>
              <th className="p-3">Pending Fee</th>
            </tr>
          </thead>

          <tbody>
            {data.students.map((s: any, index: number) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.class}</td>
                <td className="p-3">{s.section}</td>
                <td className="p-3 text-red-500 font-semibold">
                  ₹ {s.pendingFee.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}