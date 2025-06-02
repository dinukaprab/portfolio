import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import darkTheme from "./theme/darkTheme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <CssBaseline />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
