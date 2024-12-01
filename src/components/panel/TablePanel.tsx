import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

function TablePanel() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(50);
  const [rowCount, setRowCount] = useState<number>(0);

  //column definition
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "state", headerName: "State", width: 200 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "crimeType", headerName: "Crime Type", width: 200 },
    { field: "count", headerName: "Count", width: 150 },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/v1/getList", {
        params: {
          page: page,
          size: pageSize,
        },
      });
      if (response.status === 200) {
        setRows(
          response.data.data.content.map((item: any) => ({
            id: item.id,
            state: item.state,
            year: item.year,
            crimeType: item.crimeType,
            count: item.count,
          }))
        );
        setRowCount(response.data.data.totalElements || 0);
      }
    } catch (error) {
      console.log("Error in fetching records:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  const onPageChangeClick = () => {
    console.log("clicked");
  };
  return (
    <div
      style={{
        alignContent: "center",
        height: "calc(90vh - 64px)",
        width: "94%",
        padding: "16px",
      }}
    >
      <Paper
        sx={{ height: "calc(80vh - 64px)", width: "100%", padding: "16px" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={rowCount}
          pagination
          paginationMode="server"
          pageSizeOptions={[10, 20]}
          
          sx={{
            border: 0,
          }}
        />
      </Paper>
    </div>
  );
}

export default TablePanel;
