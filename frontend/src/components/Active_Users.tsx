import { useEffect, useState } from "react";
import axios from "axios";

export default function Active_Users() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dvs/3")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 space-y-6">

      {/* ✅ KPI Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-64">
        <p className="text-gray-500 text-sm">Active Users</p>
        <h1 className="text-4xl font-bold text-green-600 mt-2">
          {data.totalActive}
        </h1>
      </div>

      {/* ✅ Users List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">All Users</h2>

        <ul className="space-y-2">
          {data.users.map((user: any, index: number) => (
            <li
              key={index}
              className="flex justify-between border-b pb-2"
            >
              <span>{user.name}</span>

              <span
                className={`text-xs font-semibold ${
                  user.active ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.active ? "Active" : "Inactive"}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}