import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#57c1c9", // Primary brand color (teal-ish)
      contrastText: "#fff", // Text color on primary buttons for readability
    },
    secondary: {
      main: "#f48fb1", // Secondary accent color (pink)
    },
    rainbow: {
      red: "#ff0000", // Bright red
      orange: "#ff7300", // Warm orange
      yellow: "#fffb00", // Sunny yellow
      lime: "#48ff00", // Fresh lime green
      aqua: "#00ffd5", // Cool aqua blue
      blue: "#002bff", // Deep blue
      purple: "#7a00ff", // Rich purple
      pink: "#ff00c8", // Bright pink
    },

    background: {
      default: "#101010", // Dark background base color for app
    },
  },
});

export default darkTheme;
