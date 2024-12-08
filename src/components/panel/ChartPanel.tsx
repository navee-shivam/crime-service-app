import { PieChart } from "@mui/x-charts";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function ChartPanel() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/getCrimeDetailsCount",
        {
          state: "ASSAM", // Request payload
        }
      );

      // Transform the result into the format expected by PieChart
      const formattedData = response.data.data.map(
        (item: any, index: number) => ({
          id: index + 1, // Auto-incrementing id
          value: item.count, // Value for the pie chart slice
          label: item.crimeType, // Label for the pie chart slice
        })
      );

      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {data.length > 0 ? (
        <PieChart
          height={250}
          width={250}
          series={[
            {
              data: data,
              innerRadius: 1, // Ensures a complete pie chart
              outerRadius: 100, // Controls the size of the pie chart
              paddingAngle: 1,
              cornerRadius: 1,
              startAngle: 0,
              endAngle: 360,
            },
          ]}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
}

export default ChartPanel;
