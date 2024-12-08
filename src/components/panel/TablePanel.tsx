import { Paper } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

function TablePanel() {
  const [rows, setRows] = useState<any[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 50,
  });
  const [rowCount, setRowCount] = useState<number>(0);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "state", headerName: "State", width: 100 },
    { field: "year", headerName: "Year", width: 80 },
    { field: "crimeType", headerName: "Crime Type", width: 200 },
    { field: "count", headerName: "Count", width: 100 },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/v1/getList", {
        params: {
          page: paginationModel.page,
          size: paginationModel.pageSize,
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
  }, [paginationModel]);

  const onPageChangeClick = (newValue: any) => {
    setPaginationModel(newValue);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        position: "relative",
        height: "70vh",
        width: "90%",
        padding: "16px",
        flexDirection: "column",
      }}
      elevation={3}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPageChangeClick}
        sx={{ flex: 1, border: 0 }}
      />
    </Paper>
  );
}

export default TablePanel;
