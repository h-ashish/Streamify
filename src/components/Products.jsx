import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Avatar, Chip, Paper } from "@mui/material";

const rows = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  rank: index + 1,
  product: {
    name: "Givench Sweater",
    id: "#17228898",
    image: `https://via.placeholder.com/50?text=${index + 1}`,
  },
  totalBuyers: 12990,
  price: "$1,234.82",
  stock: Math.floor(Math.random() * 500) + 100,
  rating:
    Math.random() > 0.7
      ? "Perfect"
      : Math.random() > 0.4
      ? "Very Good"
      : "Good",
}));

const columns = [
  {
    field: "rank",
    headerName: "Rank",
    width: 80,
    sortable: false,
    headerClassName: "custom-header",
  },
  {
    field: "product",
    headerName: "Product",
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" height={50}>
        <Avatar src={params.value.image} alt={params.value.name} />
        <Typography variant="body2" fontWeight="bold" ml={10}>
          {params.value.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" ml={10}>
          {params.value.id}
        </Typography>
      </Box>
    ),
    headerClassName: "custom-header",
  },
  {
    field: "totalBuyers",
    headerName: "Total Buyers",
    width: 130,
    headerClassName: "custom-header",
  },
  {
    field: "price",
    headerName: "Price",
    width: 130,
    headerClassName: "custom-header",
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
    headerClassName: "custom-header",
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 180,
    renderCell: (params) => {
      const colorMap = {
        Perfect: "success",
        "Very Good": "primary",
        Good: "warning",
      };
      return (
        <Chip
          label={`Score: ${params.value}`}
          color={colorMap[params.value]}
          variant="outlined"
          size="small"
        />
      );
    },
    headerClassName: "custom-header",
  },
];
const Products = () => {
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
      <h1>All Products</h1>
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
export default Products;
