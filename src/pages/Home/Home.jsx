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
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHovering(false);
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
          component="button"
          onClick={scrollToTop}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          sx={(theme) => ({
            position: "fixed",
            bottom: "30px",
            right: "30px",
            height: "50px",
            width: hovering ? "140px" : "50px",
            borderRadius: hovering ? "50px" : "50%",
            backgroundColor: hovering ? "rgb(181,160,255)" : "rgb(20, 20, 20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 0px 0px 4px rgba(180, 160, 255, 0.253)",
            cursor: "pointer",
            overflow: "hidden",
            zIndex: 1000,
            transition: "all 0.3s ease",
            border: hovering ? `none` : `2px solid ${theme.palette.rainbow.red}`,
            animation: hovering ? "none" : "bounce 2s infinite, pulse 2s infinite",
            "& svg": {
              width: "20px",
              transition: "transform 0.3s",
              color: "#fff",
              transform: hovering ? "translateY(-200%)" : "none",
            },
            "&::before": {
              content: '"Back to Top"',
              position: "absolute",
              fontSize: hovering ? "13px" : "0px",
              color: "#fff",
              transition: "all 0.3s ease",
              top: hovering ? "unset" : "2px",
              left: hovering ? "unset" : "2px",
              right: hovering ? "unset" : "2px",
              bottom: hovering ? "unset" : "2px",
              borderRadius: hovering ? "none" : "50%",
              border: hovering ? "none" : `2px solid ${theme.palette.rainbow.red}`,
              filter: hovering ? "none" : "blur(2px)",
              zIndex: -1,
              color: "#000",
              fontWeight: "bold",
              letterSpacing: '0.05em',
              fontFamily: 'Raleway, sans-serif',
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "-10px",
              bottom: "-10px",
              borderRadius: "50%",
              border: "2px solid rgba(72, 255, 0, 0.5)",
              opacity: 0,
              animation: hovering ? "none" : "ring 2s infinite",
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
          })}
        >
          <KeyboardDoubleArrowUpIcon className="go-to-top-icon" sx={{ color: "white", }} />
        </Box>
      )}
    </>
  );
}