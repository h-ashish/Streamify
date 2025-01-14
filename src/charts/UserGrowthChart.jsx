/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGlobalState } from "../state/useGlobalState";

const UserGrowthChart = ({ color }) => {
  const { state } = useGlobalState();
  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        User Growth (Last 12 Months)
      </Typography>
      <ResponsiveContainer width={520} height={300}>
        <LineChart data={state.userGrowthData}>
          <CartesianGrid stroke="#E5E7EB" /> <XAxis dataKey="month" />
          <YAxis /> <Tooltip /> <Legend />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke={color.lineTotal}
            strokeWidth={2}
            name="Total Users"
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke={color.lineActive}
            strokeWidth={2}
            name="Active Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};
export default UserGrowthChart;
