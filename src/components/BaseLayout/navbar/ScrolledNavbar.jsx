import {
    AppBar,
    Slide,
    Fade,
    Box,
    CardMedia,
    useScrollTrigger,
    Button
} from "@mui/material";

export default function ScrolledNavbar() {
    const trigger = useScrollTrigger({ threshold: 100 });

    return (
        <Slide in={trigger} direction="down">
            <Fade in={trigger}>
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
                                ml: 20,
                                aspectRatio: "3/2",
                                cursor: "pointer",
                            }}
                        />
                        <Box sx={{ display: "flex", gap: 3, mr: 10 }}>
                            {[
                                { label: "Home", target: "hero" },
                                { label: "About Me", target: "about" },
                                { label: "Projects", target: "projects" },
                                { label: "Skills", target: "skills" },
                                { label: "Resume", target: "resume" },
                                { label: "Testimonials", target: "testimonials" },
                                { label: "Contact", target: "contact" },
                            ].map(({ label, target }) => (
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
                                        fontWeight: 500,
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 1,
                                        textTransform: "capitalize",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            textDecoration: "none",
                                        },
                                        "&:active": {
                                            transform: "scale(0.98)",
                                        },
                                    }}

                                >
                                    {label}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </AppBar>
            </Fade>
        </Slide>
    );
}
