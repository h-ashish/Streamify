/* eslint-disable react/prop-types */
import { Typography, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
const DataTable = ({ data, title }) => {
  const [columnConfig, setColumnConfig] = useState([]);
  const formatDate = (params) => params.value;

  useEffect(() => {
    if (data?.columns) {
      const res = data?.columns?.map((val) => ({
        ...val,
        valueFormatter: formatDate,
      }));
      setColumnConfig(res);
    }
  }, [data, data?.columns]);

  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        {" "}
        {title}
      </Typography>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data.rows}
          columns={columnConfig}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection={false}
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#F1F5F9",
              color: "#0F172A",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": { backgroundColor: "#E2E8F0" },
            "& .MuiDataGrid-footerContainer": { backgroundColor: "#F1F5F9" },
          }}
        />
      </div>
    </Paper>
  );
};
export default DataTable;
