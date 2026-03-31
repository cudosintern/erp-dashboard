import { useEffect, useState } from "react";
import axios from "axios";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function StockGaugeWidget() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/exam/8")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md w-max justify-center items-center">
      <h2 className="text-lg font-semibold mb-4">
        Stock Indicator
      </h2>

      {/* 🔥 GRID for multiple gauges */}
      <div className="grid grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div key={index} className="text-center">

            <h3 className="mb-2 font-medium">{item.name}</h3>

            <RadialBarChart
              width={300}
              height={200}
              innerRadius="70%"
              outerRadius="100%"
              data={[{ value: item.value }]}
              startAngle={180}
              endAngle={0}
            >
              <PolarAngleAxis
                type="number"
                domain={[item.min, item.max]}
                tick={false}
              />
              <RadialBar
                dataKey="value"
                cornerRadius={10}
                fill={
                  item.value > 70
                    ? "#22c55e"   // green
                    : item.value > 40
                    ? "#facc15"   // yellow
                    : "#ef4444"   // red
                }
              />
            </RadialBarChart>

            <p className="mt-2 text-xl font-bold">
              {item.value}%
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}