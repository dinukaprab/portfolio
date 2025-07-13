import { AnimatedBackground } from 'animated-backgrounds';
import { Box } from "@mui/material";

export default function Hero({ componentId }) {

  return (
    <>
      <AnimatedBackground
        animationName="quantumField"
        theme="portfolio"
      />

      <Box
        id={componentId}
        sx={{
          height: "100vh",
          background: `linear-gradient(to bottom,rgb(2, 6, 14) 0%, #101010 100%)`,
          opacity: 0.7,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 100,
            left: "75%",
            transform: "translateX(-75%)",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle at center, rgba(87, 193, 201, 0.4) 0%, transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: "10%",
            transform: "translateX(-50%)",
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(87, 193, 201, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />
      </Box>
    </>
  );
}
