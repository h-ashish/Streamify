/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import {
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {} from "recharts";
import { useGlobalState } from "../state/useGlobalState";
import { useEffect, useState } from "react";

const RevenueDistributionChart = ({ color }) => {
  const { state } = useGlobalState();
  const [revenuePieData, setRevenuePieData] = useState([]);

  useEffect(() => {
    if (state?.revenueData?.rows) {
      const data = state?.revenueData?.rows;
      const totalRevenueSum = data.reduce(
        (acc, obj) => acc + obj.totalRevenueGenerated,
        0
      );
      const categoryRevenue = data.reduce((acc, obj) => {
        if (!acc[obj.category]) {
          acc[obj.category] = 0;
        }
        acc[obj.category] += obj.totalRevenueGenerated;
        return acc;
      }, {});
      const result = Object.entries(categoryRevenue).map(
        ([category, revenue]) => ({
          name: category,
          value: parseInt(((revenue / totalRevenueSum) * 100).toFixed(2)),
        })
      );
      setRevenuePieData(result);
    }
  }, [state?.revenueData?.rows]);

  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        Revenue Distribution
      </Typography>
      <ResponsiveContainer width={400} height={300}>
        <PieChart>
          <Pie
            data={revenuePieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {revenuePieData &&
              revenuePieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color.pieColors[index]} />
              ))}
          </Pie>
          <Tooltip /> <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RevenueDistributionChart;
