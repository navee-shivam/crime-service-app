import { Box, Container, Typography } from "@mui/material";
import TablePanel from "../panel/TablePanel";
import PieCharts from "../panel/PieCharts";
import MapPanel from "../panel/MapPanel";
import { useState } from "react";
import Header from "../panel/Header";
import { ResponsiveContainer } from "recharts";

function CrimeLayout() {
  const [selectedState, setSelectedState] = useState<string>("Assam");

  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              marginBottom: "16px",
              fontWeight: "bold",
            }}
          >
            Crime Data Overview
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#f0f0f0",
                padding: "20px",
                borderRadius: "8px",
                height: "450px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  textAlign: "center",
                  marginBottom: "12px",
                  fontWeight: "bold",
                }}
              >
                State Map Wise Data
              </Typography>
              <MapPanel
                selectedState={selectedState}
                setSelectedState={setSelectedState}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                backgroundColor: "#f0f0f0",
                padding: "20px",
                borderRadius: "8px",
                height: "450px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  textAlign: "center",
                  marginBottom: "12px",
                  fontWeight: "bold",
                }}
              >
                {selectedState.toUpperCase()} Crime Data
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieCharts stateName={selectedState} />
              </ResponsiveContainer>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              textAlign: "center",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            Detailed Crime Data
          </Typography>
          <TablePanel />
        </Box>
      </Container>
    </div>
  );
}

export default CrimeLayout;
