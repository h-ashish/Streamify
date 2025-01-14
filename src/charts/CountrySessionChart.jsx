/* eslint-disable react/prop-types */
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  Cell,
  BarChart,
  XAxis,
  Bar,
  YAxis,
} from "recharts";
import { useGlobalState } from "../state/useGlobalState";

const CountrySessionChart = () => {
  const { state } = useGlobalState();

  const COLORS = [
    "#245858",
    "#e4862f",
    "#8e9ba2",
    "#f4c48e",
    "#23395d",
    "#de9495",
  ]; // Bar colors

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            padding: "8px",
          }}
        >
          <Typography variant="body2">
            {label}: {payload[0].value} ({payload[0].payload.percentage}%)
          </Typography>
        </Box>
      );
    }
    return null;
  };
  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="bold">
        Session by Country
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Showing Data for Top Sessions
      </Typography>
      <ResponsiveContainer width={400} height={300}>
        <BarChart data={state?.countrySessions} layout="vertical">
          <YAxis
            dataKey="country"
            type="category"
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <XAxis type="number" tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="sessions" barSize={15}>
            {state.countrySessions.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};
export default CountrySessionChart;
