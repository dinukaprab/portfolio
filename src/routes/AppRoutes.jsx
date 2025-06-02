import { Routes, Route } from "react-router-dom";
import BaseLayout from "../components/BaseLayout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/ErrorPages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout content={<Home />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
