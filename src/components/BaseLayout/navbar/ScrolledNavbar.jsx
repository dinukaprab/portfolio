import { useEffect, useState } from "react";
import {
    AppBar,
    Slide,
    Fade,
    Box,
    CardMedia,
    Button,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function ScrolledNavbar() {
    const [activeTab, setActiveTab] = useState("hero");
    const [state, setState] = useState({ right: false });

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "hero",
                "about",
                "skills",
                "resume",
                "projects",
                "contact",
                "footer",
            ];

            const scrollPos = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveTab(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const tabs = [
        { label: "Home", target: "hero" },
        { label: "About Me", target: "about" },
        { label: "Skills", target: "skills" },
        { label: "Resume", target: "resume" },
        { label: "Projects", target: "projects" },
        { label: "Contact", target: "contact" },
    ];

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {tabs.map(({ label, target }) => (
                    <ListItem key={target} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                if (label === "Home") {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                } else {
                                    const el = document.getElementById(target);
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            sx={{
                                transition: "all 0.3s ease",
                                background:
                                    activeTab === target ? "rgba(255,255,255,0.2)" : "transparent",
                                "&:hover": {
                                    background: activeTab === target ? "rgba(255,255,255,0.2)" : "",
                                },
                                "&:active": {
                                    transform: "scale(0.98)",
                                },
                            }}>
                            <Box
                                sx={{
                                    fontFamily: "Noto Sans, sans-serif",
                                    fontWeight: 600,
                                    px: 1.5,
                                    py: 0.5,
                                    textTransform: "capitalize",
                                }}
                            >
                                <span
                                    style={{
                                        background: "white",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        display: "inline-block",
                                    }}
                                >
                                    {label}
                                </span>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Slide in={true} direction="down">
                <Fade in={true}>
                    <AppBar position="fixed" sx={{ boxShadow: 2, backdropFilter: "blur(5px)" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                p: 1,
                            }}
                        >
                            <CardMedia
                                image="/src/assets/logo.png"
                                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                sx={{
                                    width: 80,
                                    ml: { xs: 2, md: 10 },
                                    aspectRatio: "3/2",
                                    cursor: "pointer",
                                }}
                            />
                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, mr: 10 }}>
                                {tabs.map(({ label, target }) => (
                                    <Box
                                        key={target}
                                        component={Button}
                                        onClick={() => {
                                            if (label === "Home") {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            } else {
                                                const el = document.getElementById(target);
                                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                            }
                                        }}
                                        sx={{
                                            fontFamily: "Noto Sans, sans-serif",
                                            fontWeight: 600,
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 1,
                                            textTransform: "capitalize",
                                            transition: "all 0.3s ease",
                                            backgroundColor:
                                                activeTab === target ? "rgba(255,255,255,0.1)" : "transparent",
                                            "&:hover": {
                                                backgroundColor: "rgba(255,255,255,0.1)",
                                                textDecoration: "none",
                                            },
                                            "&:active": {
                                                transform: "scale(0.98)",
                                            },
                                        }}

                                    >
                                        <span
                                            style={{
                                                background: "white",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                display: "inline-block",
                                            }}
                                        >
                                            {label}
                                        </span>

                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <IconButton onClick={toggleDrawer("right", true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>

                        </Box>
                    </AppBar>
                </Fade>
            </Slide>
            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {list("right")}
            </SwipeableDrawer>

        </>
    );
}
