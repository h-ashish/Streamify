/* eslint-disable react/prop-types */
import { Box, Divider, Paper, Typography } from "@mui/material";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const PremiumUsersChart = () => {
  const userPlans = [
    { name: "Premium Plan", value: 1809 },
    { name: "Basic Plan", value: 515 },
  ];

  const PIE_COLORS = ["#245858", "#8e9ba2"]; // Pie chart colors
  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="bold">
        Registered Users
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        An overview of your users
      </Typography>
      <ResponsiveContainer width={350} height={220}>
        <PieChart>
          <Pie
            data={userPlans}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            startAngle={220}
            endAngle={-40}
          >
            {userPlans.map((entry, index) => (
              <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Divider />
      <Box display="flex" justifyContent="space-between" mt={2}>
        {userPlans.map((plan, index) => (
          <Box key={plan.name}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color={PIE_COLORS[index]}
            >
              {plan.value}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {plan.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default PremiumUsersChart;
