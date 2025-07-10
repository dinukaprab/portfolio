import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PrimaryNavbar from "./navbar/PrimaryNavbar";
import ScrolledNavbar from "./navbar/ScrolledNavbar";

export default function BaseLayout({ content }) {
  const [showScrolledNavbar, setShowScrolledNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrolledNavbar(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PrimaryNavbar />
      {showScrolledNavbar && <ScrolledNavbar />}
      <Box>{content}</Box>
    </>
  );
}
