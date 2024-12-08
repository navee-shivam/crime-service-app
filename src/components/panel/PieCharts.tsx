import axios from "axios";
import { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PieChartsProps {
  stateName: string;
}

function PieCharts({ stateName }: PieChartsProps) {
  const [data, setData] = useState([]);
  const COLORS = [
    "#E57373",
    "#64B5F6",
    "#81C784",
    "#FFB74D",
    "#BA68C8",
    "#FFD54F",
    "#90CAF9",
  ];

  const fetchApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/getCrimeDetailsCount",
        {
          state: stateName,
        }
      );

      if (response.status === 200) {
        console.log("Success:", response.data);
        // Ensure the data format is correct for Recharts
        const formattedData = response.data.data.map((item: any) => ({
          name: item.stateCrime,
          count: item.count,
        }));
        console.log(formattedData);
        setData(formattedData);
      }
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    if (stateName) {
      fetchApi();
    }
  }, [stateName]);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx={120}
            cy={120}
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            dataKey={"count"}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            fontWeight="bold"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default PieCharts;
