import { AnimatedBackground } from 'animated-backgrounds';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Hero({ componentId }) {
  const socials = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com/yourprofile' },
    { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/yourprofile' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/yourprofile' },
    { name: 'WhatsApp', icon: <WhatsAppIcon />, url: 'https://wa.me/yourphonenumber' },
  ];

  return (
    <>
      <AnimatedBackground
        animationName="quantumField"
        theme="portfolio"
      />

      <Box
        id={componentId}
        sx={{
          position: "relative",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `rgb(2, 6, 14)`,
            opacity: 0.7,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "fixed",
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
            position: "fixed",
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
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            color: 'white',
            textAlign: 'left',
            pt: { xs: 15, md: 25 },
            pl: { xs: 3, md: 10 },
            maxWidth: '600px',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Hi, I'm Dinuka 👋
          </Typography>

          <Typography variant="h5" sx={{ mb: 4 }}>
            <TypeAnimation
              sequence={[
                "I'm a professional web developer.", 2500,
                "I'm a full-stack engineer.", 2500,
                "I design modern user interfaces.", 2500,
                "I build fast, scalable web apps.", 2500,
                "I solve real-world problems with code.", 2500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontSize: '1.1rem',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              letterSpacing: '0.05em',
              fontFamily: 'Raleway, sans-serif',
            }}
          >
            A passionate web developer crafting clean and efficient solutions. Focused on modern UI, performance, and pixel perfection.
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            sx={(theme) => ({
              position: "relative",
              color: "#fff",
              borderRadius: 8,
              padding: "6px 48px",
              backgroundClip: "padding-box",
              border: "2px solid transparent",
              backgroundOrigin: "border-box",
              borderColor: theme.palette.rainbow.pink,
              backgroundClip: "padding-box, border-box",
              zIndex: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                top: "2px",
                left: "2px",
                right: "2px",
                bottom: "2px",
                borderRadius: 6,
                border: `2px solid ${theme.palette.rainbow.red}`,
                filter: "blur(2px)",
                zIndex: -1,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-4px",
                left: "-4px",
                right: "-4px",
                bottom: "-4px",
                borderRadius: 10,
                border: `2px solid ${theme.palette.rainbow.red}`,
                filter: "blur(2px)",
                zIndex: -2,
              },
              '&:hover': {
                boxShadow: `0 0 10px ${theme.palette.rainbow.pink}, 0 0 20px ${theme.palette.rainbow.pink}`,
              },
            })}
          >
            View My Works
          </Button>

          <Stack direction="row" spacing={2} mt={5} justifyContent="flex-start">
            {socials.map(({ name, icon, url }) => (
              <IconButton
                key={name}
                color="primary"
                aria-label={name}
                component="a"
                href={url}
                target="_blank"
                rel="noopener"
                sx={(theme) => ({
                  zIndex: 100,
                  color: '#ffffff',
                  border: `2px solid ${theme.palette.rainbow.pink}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: '0.3s',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '200%',
                    height: '100%',
                    background:
                      `linear-gradient(120deg, transparent, ${theme.palette.rainbow.red}, transparent)`,
                    transition: '0.5s',
                    zIndex: -1,
                  },
                  '&:hover::before': {
                    left: 0,
                  },
                  '&:hover': {
                    boxShadow: `0 0 10px ${theme.palette.rainbow.pink}, 0 0 20px ${theme.palette.rainbow.pink}`,
                    borderColor: theme.palette.rainbow.pink,
                  },
                })}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

        </Box>
      </Box >
    </>
  );
}
