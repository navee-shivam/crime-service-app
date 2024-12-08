import { Box, Container } from "@mui/material";
import TablePanel from "../panel/TablePanel";
import PieCharts from "../panel/PieCharts";
import MapPanel from "../panel/MapPanel";
import { useState } from "react";

function CrimeLayout() {
  //set the default value to assam
  const [selectedState, setSelectedState] = useState<string>("Assam");

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "12px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr", // Left (Grid) 1/3, Right (Map + Pie Chart) 2/3
        gap: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <TablePanel />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "8px",
            height: "400px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <MapPanel
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "8px",
            height: "400px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <PieCharts stateName={selectedState} />
        </Box>
      </Box>
    </Container>
  );
}

export default CrimeLayout;
