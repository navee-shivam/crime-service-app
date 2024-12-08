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
    "#878686",
    "#D20103",
    "#FBCD17",
    "#15F5FF",
    "#CC6CE7",
    "#60E02D",
    "#0901E2",
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
      <ResponsiveContainer>
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default PieCharts;
