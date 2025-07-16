import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Hero componentId="hero" />
      <AboutMe componentId="about" />
      <Skills componentId="skills" />
      <Resume componentId="resume" />
      <Projects componentId="projects" />
      <Contact componentId="contact" />
      <Footer componentId="footer" />

      {showScrollTop && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "25px",
            margin: "10px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#ff0000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(255, 115, 0, 0.7)",
            zIndex: 1000,
            transition: "all 0.35s ease-in-out",
            animation: "bounce 2s infinite,pulse 2s infinite",
            border: "2px solid rgba(255, 251, 0, 0.4)",
            ":before": {
              content: '""',
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "-10px",
              bottom: "-10px",
              borderRadius: "50%",
              border: "2px solid rgba(72, 255, 0, 0.5)",
              opacity: 0,
              animation: "ring 2s infinite",
            },
            "&:hover": {
              transform: "translateY(-3px)",
              backgroundColor: "#00ffd5",
              boxShadow: "0 6px 12px rgba(0, 43, 255, 0.7)",
              border: "2px solid rgba(122, 0, 255, 0.6)",
            },
            "&:hover .go-to-top-icon": {
              color: "black",
            },
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-10px)" },
              "60%": { transform: "translateY(-5px)" },
            },
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(255, 0, 200, 1)" },
              "70%": { boxShadow: "0 0 0 10px rgba(255, 0, 200, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(255, 0, 200, 0)" },
            },
            "@keyframes ring": {
              "0%": { transform: "scale(0.8)", opacity: 1 },
              "80%": { transform: "scale(1.2)", opacity: 0 },
              "100%": { transform: "scale(1.5)", opacity: 0 },
            },
          }}
        >
          <KeyboardDoubleArrowUpIcon className="go-to-top-icon" sx={{ color: "white" }} />
        </Box>
      )}
    </>
  );
}
