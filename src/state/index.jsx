import { createContext, useReducer } from "react";

const initialState = {
  userGrowthData: [],
  recentStreams: {},
  revenueData: {},
  regionData: [],
  countrySessions: [],
  cardInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_GROWTH_DATA_SUCCESS":
      return { ...state, userGrowthData: action.payload.userGrowthData };
    case "USER_GROWTH_DATA_FAILURE":
      return { ...state, userGrowthData: [] };
    case "RECENT_STREAMS_SUCCESS":
      return { ...state, recentStreams: action.payload.recentStreams };
    case "RECENT_STREAMS_FAILURE":
      return { ...state, recentStreams: {} };
    case "REVENUE_DATA_SUCCESS":
      return { ...state, revenueData: action.payload.revenueData };
    case "REVENUE_DATA_FAILURE":
      return { ...state, revenueData: {} };
    case "COUNTRY_SESSION_SUCCESS":
      return { ...state, countrySessions: action.payload.countrySessions };
    case "COUNTRY_SESSION_FAILURE":
      return { ...state, countrySessions: [] };
    case "UPDATE_CARD_INFO":
      return { ...state, cardInfo: action.payload };
    default:
      return state;
  }
};

export const GlobalStateContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
