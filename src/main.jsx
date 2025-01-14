import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/themes.jsx";
import { GlobalStateProvider } from "./state/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </GlobalStateProvider>
  </StrictMode>
);
