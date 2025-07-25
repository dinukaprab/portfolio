import { Box, Button } from "@mui/material";

const animations = {
  "@keyframes fadeUp-navbar": {
    "0%": {
      opacity: 0,
      display: "none",
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      display: "flex",
      transform: "translateY(0)",
    },
  },

  "@keyframes fadeUp-hire-button": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  "@keyframes hire-me-button-glowing": {
    "0%": { backgroundPosition: "0 0" },
    "50%": { backgroundPosition: "400% 0" },
    "100%": { backgroundPosition: "0 0" },
  },
};

export default function Navbar() {
  return (
    <Box
      sx={{
        ...animations,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backdropFilter: "blur(5px)",
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeUp-navbar 0.8s ease-out forwards",
        animationDelay: "0.2s",
        "&::before": {
          content: '""',
          position: "absolute",
          display: { xs: "none", md: "block" },
          bottom: 0,
          left: 0,
          width: "37.5%",
          height: "40px",
          background: "rgb(2, 6, 14)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          display: { xs: "none", md: "block" },
          bottom: 0,
          right: 0,
          width: "37.5%",
          height: "40px",
          background: "rgb(2, 6, 14)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "40px",
          background: "#101010",
          zIndex: -100
        }}
      />
      <Box
        onClick={() => {
          window.open("https://wa.me/94762200748", "_blank");
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "25%" },
          background: "#101010",
          backdropFilter: "blur(5px)",
          opacity: 0,
          transform: "translateY(20px)",
          animation: "fadeUp-navbar 0.8s ease-out forwards",
          animationDelay: "0.2s",
          zIndex: 100,
          "&::before": {
            content: '""',
            position: "absolute",
            display: { xs: "none", md: "block" },
            bottom: 0,
            left: -1,
            width: "40px",
            height: "40px",
            background: "rgb(2, 6, 14)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            display: { xs: "none", md: "block" },
            bottom: 0,
            right: -1,
            width: "40px",
            height: "40px",
            background: "rgb(2, 6, 14)",
            clipPath: "polygon(100% 0,100% 100%, 0 100%)",
          },
        }}
      >
        <Box
          sx={{
            opacity: 0,
            transform: "translateY(-20px)",
            animation: "fadeUp-hire-button 1.5s ease-out forwards",
            animationDelay: "0.5s",
          }}
        >
          <Button
            sx={(theme) => ({
              margin: 2,
              border: "none",
              outline: "none",
              padding: "5px 50px",
              fontWeight: 600,
              borderRadius: 8,
              position: 'relative',
              zIndex: 1000,
              ":before": {
                content: '""',
                position: "absolute",
                top: "-1px",
                left: "1px",
                background: `linear-gradient(45deg, 
                  ${theme.palette.rainbow.red}, 
                  ${theme.palette.rainbow.orange}, 
                  ${theme.palette.rainbow.yellow}, 
                  ${theme.palette.rainbow.lime}, 
                  ${theme.palette.rainbow.aqua}, 
                  ${theme.palette.rainbow.blue}, 
                  ${theme.palette.rainbow.purple}, 
                  ${theme.palette.rainbow.pink}, 
                  ${theme.palette.rainbow.red}
                )`,
                backgroundSize: "400%",
                filter: "blur(5px)",
                width: "calc(100% + 1px)",
                height: "calc(100% + 1px)",
                zIndex: -1,
                animation: "hire-me-button-glowing 20s linear infinite",
                borderRadius: 8,
                transition: "opacity 0.3s ease-in-out",
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#111",
                left: 0,
                top: 0,
                borderRadius: 8,
                zIndex: -1,
              },
            })}
          >
            <Box
              component="span"
              sx={(theme) => ({
                background: `linear-gradient(90deg, ${theme.palette.rainbow.pink}, ${theme.palette.rainbow.orange}, ${theme.palette.rainbow.aqua})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: 'inline-block',
              })}
            >
              Hire Me
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
