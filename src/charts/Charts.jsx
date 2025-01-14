import { Box, Grid2 } from "@mui/material";
import UserGrowthChart from "./UserGrowthChart";
import TopStreamedSongs from "./TopStreamedSongs";
import DataTable from "./DataTable";
import CountrySessionChart from "./CountrySessionChart";
import { useGlobalState } from "../state/useGlobalState";
import useFetch from "../common/useFetchHook";
import { recentStreams } from "../common/endpoints";
import Loader from "../common/Loader";

const DashboardCharts = () => {
  const { state, dispatch } = useGlobalState();
  const { loading } = useFetch(
    recentStreams,
    dispatch,
    "RECENT_STREAMS_SUCCESS"
  );

  // Colors;
  const chartColors = {
    lineTotal: "#245858",
    lineActive: "#e4862f",
    pieColors: [
      "#245858",
      "#e4862f",
      "#8e9ba2",
      "#f4c48e",
      "#23395d",
      "#de9495",
    ],
    barColors: "#245858",
  };
  return (
    <Box sx={{ padding: "24px", width: "100%" }}>
      {loading ? (
        <Loader />
      ) : (
        <Grid2 container spacing={3}>
          {/* User Growth Chart */}
          <Grid2 item xs={12} md={6}>
            <UserGrowthChart color={chartColors} />
          </Grid2>
          {/* Top 5 Streamed Songs */}
          <Grid2 item xs={12}>
            <TopStreamedSongs color={chartColors} />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <CountrySessionChart />
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <DataTable title="Recent Streams" data={state.recentStreams} />
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};
export default DashboardCharts;
