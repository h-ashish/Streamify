import { Paper, Typography } from "@mui/material";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const regionData = [
  { region: "Europe", value: 2700 },
  { region: "Asia", value: 3200 },
  { region: "Pacific", value: 1500 },
  { region: "Middle East", value: 800 },
  { region: "Africa", value: 1200 },
  { region: "Americas", value: 3000 },
];

const COLORS = "#245858"; // Adjust color to match the design

const RegionRadialChart = () => {
  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="bold">
        Revenue By Region
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Showing Data for Most Revenue
      </Typography>
      <ResponsiveContainer width={350} height={280}>
        <RadarChart outerRadius="70%" data={regionData}>
          <PolarGrid stroke="#E5E5E5" />
          <PolarAngleAxis
            dataKey="region"
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#6B7280"
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 3500]}
            tick={{ fontSize: 10 }}
            stroke="#8e9ba2"
          />
          <Tooltip />
          <Radar
            name="Regions"
            dataKey="value"
            stroke={COLORS}
            fill={COLORS}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RegionRadialChart;
