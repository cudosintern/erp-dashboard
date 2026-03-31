import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = {
  Pass: "#16a34a",   // green
  Fail: "#dc2626",   // red
};

export default function ExamPassWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/exam/2")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 bg-blue-400 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Pass Percentage (Department-wise)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((dept: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-100 p-4 rounded-xl shadow-sm"
          >
            {/* Department Name */}
            <h3 className="mb-2 font-semibold text-gray-700">
              {dept.department}
            </h3>

            {/* Donut Chart */}
            <PieChart width={200} height={200}>
              <Pie
                data={dept.data}
                dataKey="value"
                nameKey="category"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={3}
              >
                {dept.data.map((entry: any, i: number) => (
                  <Cell
                    key={i}
                    fill={COLORS[entry.category as "Pass" | "Fail"]}
                  />
                ))}
              </Pie>

              {/* Tooltip */}
              <Tooltip formatter={(value) => `${value}%`} />

              {/* Legend */}
              <Legend />
            </PieChart>

            {/* Custom Labels */}
            <div className="mt-2 text-sm text-gray-600">
              {dept.data.map((item: any, i: number) => (
                <p key={i}>
                  <span
                    className="inline-block w-3 h-3 mr-2 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[item.category as "Pass" | "Fail"],
                    }}
                  ></span>
                  {item.category}: <b>{item.value}%</b>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}