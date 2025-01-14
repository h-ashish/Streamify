import { Box, Grid2 } from "@mui/material";
import DataCard from "./DataCard";
import DashboardCharts from "../charts/Charts";
import { useGlobalState } from "../state/useGlobalState";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { state } = useGlobalState();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData([
      {
        title: "Total Users",
        value: state?.cardInfo?.totalUsers,
        change: 12.95,
        isPositive: true,
      },
      {
        title: "Active Users",
        value: state?.cardInfo?.activeUsers,
        change: 0.33,
        isPositive: true,
      },
      {
        title: "Total Streams",
        value: state?.cardInfo?.totalStreams,
        change: 0.32,
        isPositive: false,
      },
      {
        title: "Revenue",
        value: `$${state?.cardInfo?.revenue}`,
        change: 2.85,
        isPositive: false,
      },
      {
        title: "Top Artist",
        value: state?.cardInfo?.topArtist,
        change: 2,
        isPositive: true,
      },
    ]);
  }, [state]);

  return (
    <Grid2 container>
      {/* KPIs */}
      <Grid2 item width="100%">
        <Box sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
          <Grid2 container spacing={4}>
            {cardData &&
              cardData.map((val, index) => {
                return (
                  <Grid2 item xs={12} sm={6} md={3} key={index}>
                    <DataCard
                      title={val.title}
                      value={val.value}
                      change={val.change}
                      isPositive={val.isPositive}
                    />
                  </Grid2>
                );
              })}
          </Grid2>
        </Box>
      </Grid2>

      {/* Data Visualization Charts */}
      <Grid2 item width="100%">
        <DashboardCharts />
      </Grid2>
    </Grid2>
  );
};
export default Dashboard;
