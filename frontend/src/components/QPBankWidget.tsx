import { useEffect, useState } from "react";
import axios from "axios";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function QPBankWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/exam/9")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p className="p-4">Loading...</p>;

  const value = data[2].value;

  const getColor = () => {
    if (value > 70) return "#16a34a"; // green
    if (value > 40) return "#facc15"; // yellow
    return "#dc2626"; // red
  };

  const getStatus = () => {
    if (value > 70) return "Good Availability";
    if (value > 40) return "Moderate Availability";
    return "Low Availability";
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        QP Bank Indicator
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mb-4">
        Question Paper Availability
      </p>

      {/* Gauge */}
      <div className="relative flex items-center justify-center">
        <RadialBarChart
          width={250}
          height={250}
          innerRadius="70%"
          outerRadius="100%"
          data={[{ value }]}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />

          <RadialBar
            dataKey="value"
            fill={getColor()}
            cornerRadius={12}
          />
        </RadialBarChart>

        {/* Center Value */}
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-bold text-gray-800">
            {value}%
          </span>
          <span className="text-xs text-gray-400">
            Filled
          </span>
        </div>
      </div>

      {/* Status */}
      <p
        className={`mt-3 text-sm font-medium ${
          value > 70
            ? "text-green-600"
            : value > 40
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {getStatus()}
      </p>

    </div>
  );
}