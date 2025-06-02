import { Box } from "@mui/material";
import Navbar from "./navbar/Navbar";

export default function BaseLayout({ content }) {
  return (
    <>
      <Navbar />
      <Box>{content}</Box>
    </>
  );
}
