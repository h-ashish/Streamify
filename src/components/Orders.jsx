import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Paper } from "@mui/material";

const rows = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
  customerName: `Customer ${index + 1}`,
  date: new Date(
    Date.now() - Math.floor(Math.random() * 10000000000)
  ).toLocaleDateString(),
  totalAmount: `$${(Math.random() * 500).toFixed(2)}`,
  status:
    Math.random() > 0.7
      ? "Delivered"
      : Math.random() > 0.4
      ? "Pending"
      : "Cancelled",
  paymentMethod: Math.random() > 0.5 ? "Credit Card" : "PayPal",
}));

const columns = [
  {
    field: "orderId",
    headerName: "Order ID",
    width: 150,
    headerClassName: "custom-header",
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    flex: 1,
    headerClassName: "custom-header",
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    headerClassName: "custom-header",
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    width: 150,
    headerClassName: "custom-header",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const colorMap = {
        Delivered: "success",
        Pending: "warning",
        Cancelled: "error",
      };
      return (
        <Chip
          label={params.value}
          color={colorMap[params.value]}
          variant="outlined"
          size="small"
        />
      );
    },
    headerClassName: "custom-header",
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 180,
    headerClassName: "custom-header",
  },
];

const Orders = () => {
  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        backgroundColor: "#F5F7F9",
        p: 2,
        padding: "24px",
      }}
    >
      <h1>Orders</h1>
      <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#E8F0F7",
              color: "#3D4852",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              color: "#3D4852",
              fontSize: "14px",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#E8F0F7",
            },
            "& .MuiChip-root": {
              fontWeight: "bold",
            },
          }}
        />
      </Paper>
    </Box>
  );
};
export default Orders;
