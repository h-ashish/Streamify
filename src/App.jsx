/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Revenue = React.lazy(() => import("./components/Revenue"));
const Products = React.lazy(() => import("./components/Products"));
const Orders = React.lazy(() => import("./components/Orders"));
const Feedback = React.lazy(() => import("./components/Feedback"));
const HelpDocs = React.lazy(() => import("./components/HelpDocs"));
const SidePanel = React.lazy(() => import("./components/SidePanel"));

import { Suspense } from "react";
import { Box } from "@mui/material";
import Loader from "./common/Loader";
import { useGlobalState } from "./state/useGlobalState";
import useFetch from "./common/useFetchHook";
import { countrySessions, userGrowthApi } from "./common/endpoints";

function App() {
  const { state, dispatch } = useGlobalState();
  const { loading, error } = useFetch(
    userGrowthApi,
    dispatch,
    "USER_GROWTH_DATA_SUCCESS"
  );

  const { countrySessionsLoading } = useFetch(
    countrySessions,
    dispatch,
    "COUNTRY_SESSION_SUCCESS"
  );

  useEffect(() => {
    let finalObj = {};
    const getPreviousMonth = () => {
      const date = new Date();
      date.setMonth(date.getMonth() - 1);
      return date.toLocaleString("en-US", { month: "short" });
    };
    if (state.userGrowthData && state.recentStreams) {
      state.userGrowthData.forEach((val) => {
        if (val.month === getPreviousMonth()) {
          finalObj = {
            ...finalObj,
            totalUsers: val.totalUsers,
            activeUsers: val.activeUsers,
          };
        }
      });
      let totalStreams = state?.recentStreams?.rows?.reduce(
        (acc, obj) => acc + obj.streamCount,
        0
      );
      let topArtist = state?.recentStreams?.rows?.reduce(
        (max, obj) => (obj.streamCount > max.streamCount ? obj : max),
        state?.recentStreams?.rows[0]
      ).songName;
      finalObj = { ...finalObj, totalStreams, topArtist, revenue: 47856.64 };
    }
    dispatch({ type: "UPDATE_CARD_INFO", payload: finalObj });
  }, [dispatch, state.recentStreams, state.userGrowthData]);

  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Box sx={{ display: "flex" }}>
            <SidePanel />
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} index />
                <Route path="/revenue" element={<Revenue />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/help" element={<HelpDocs />} />
              </Routes>
            </Box>
          </Box>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
