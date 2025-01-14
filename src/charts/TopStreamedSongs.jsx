/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
const TopStreamedSongs = ({ color }) => {
  const topSongsData = [
    { name: "Imagine", streams: 4023 },
    { name: "Billie Jean", streams: 4998 },
    { name: "Yesterday", streams: 1082 },
    { name: "Bad Habits", streams: 4239 },
    { name: "Hotel California", streams: 3436 },
  ];
  return (
    <Paper elevation={3} sx={{ padding: "16px", borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        Top 5 Streamed Songs
      </Typography>
      <ResponsiveContainer width={700} height={300}>
        <BarChart data={topSongsData}>
          <CartesianGrid stroke="#E5E7EB" /> <XAxis dataKey="name" />
          <YAxis /> <Tooltip />
          <Bar dataKey="streams" fill={color.barColors} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};
export default TopStreamedSongs;
