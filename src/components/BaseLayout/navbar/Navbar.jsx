import { Box, Button } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
          width: "100%",
          background: "rgba(16, 16, 16, 0.95)",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(64, 66, 78, 0.62)",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Box>
          <Button
            sx={{
              margin: 2,
              border: "none",
              outline: "none",
              padding: "5px 50px",
              fontWeight: 600,
              borderRadius: 8,
              zIndex: 1000,
              ":before": {
                content: '""',
                background:
                  "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
                position: "absolute",
                top: "-1px",
                left: "1px",
                backgroundSize: "400%",
                zIndex: -1,
                filter: "blur(5px)",
                width: "calc(100% + 1px)",
                height: "calc(100% + 1px)",
                animation: "hire-me-button-glowing 20s linear infinite",
                transition: "opacity 0.3s ease-in-out",
                borderRadius: 8,
              },
              ":after": {
                zIndex: -1,
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#111",
                left: 0,
                top: 0,
                borderRadius: 8,
              },
              "@keyframes hire-me-button-glowing": {
                "0%": { backgroundPosition: "0 0" },
                "50%": { backgroundPosition: "400% 0" },
                "100%": { backgroundPosition: "0 0" },
              },
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Box>
    </>
  );
}
