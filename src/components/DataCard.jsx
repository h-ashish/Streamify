import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const DataCard = ({ title, value, change, isPositive }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "16px",
        borderRadius: "12px",
        border: " 1px solid #E5E7EB",
        backgroundColor: "#F9FAFB",
        color: "#333333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minWidth: "240px",
        width: "100%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ color: "#6B7280", fontSize: "14px", fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#111827",
          fontSize: "24px",
          fontWeight: 700,
          marginTop: "8px",
        }}
      >
        {value}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "4px",
        }}
      >
        <Box
          sx={{
            backgroundColor: isPositive ? "#D1FAE5" : "#FEE2E2",
            color: isPositive ? "#047857" : "#B91C1C",
            fontWeight: 500,
            borderRadius: "12px",
            padding: "2px 8px",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* {isPositive ? `+${change}%` : `${change}%`} */}
          {isPositive ? (
            <>
              <ArrowUpward sx={{ fontSize: 14, marginRight: 0.5 }} />{" "}
              <span>{change}%</span>
            </>
          ) : (
            <>
              <ArrowDownward sx={{ fontSize: 14, marginRight: 0.5 }} />{" "}
              <span>{change}%</span>
            </>
          )}
        </Box>
        <Typography
          variant="caption"
          sx={{ color: "#6B7280", fontSize: "12px" }}
        >
          Last 30 Days
        </Typography>
      </Box>
    </Paper>
  );
};

export default DataCard;
