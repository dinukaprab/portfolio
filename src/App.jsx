import { BrowserRouter } from "react-router-dom";
import AppRoutes from "/src/routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
