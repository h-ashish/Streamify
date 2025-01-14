import { Box, Grid2 } from "@mui/material";
import DataTable from "../charts/DataTable";
import RevenueDistributionChart from "../charts/RevenueDistributionChart";
import PremiumUsersChart from "../charts/PremiumUsersChart";
import RegionRadialChart from "../charts/RegionRadialChart";
import { useGlobalState } from "../state/useGlobalState";
import useFetch from "../common/useFetchHook";
import { revenueData } from "../common/endpoints";
import Loader from "../common/Loader";

const Revenue = () => {
  const { state, dispatch } = useGlobalState();
  const { revenueLoading } = useFetch(
    revenueData,
    dispatch,
    "REVENUE_DATA_SUCCESS"
  );

  const chartColors = {
    lineTotal: "#245858",
    lineActive: "#e4862f",
    pieColors: [
      "#8e9ba2",
      "#e4862f",
      "#245858",
      "#f4c48e",
      "#de9495",
      "#23395d",
    ],
    barColors: "#245858",
  };
  return (
    <Box sx={{ padding: "24px" }}>
      <h1>Revenue</h1>
      {revenueLoading ? (
        <Loader />
      ) : (
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} md={6}>
            <RevenueDistributionChart color={chartColors} />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <PremiumUsersChart />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <RegionRadialChart />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <DataTable data={state.revenueData} title="Revenue Data" />
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};
export default Revenue;
