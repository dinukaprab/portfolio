import { Box } from "@mui/material";

export default function Skills({ componentId }) {
    return (
        <>
            <Box id={componentId}
                sx={{
                    height: "100vh",
                    background: `linear-gradient(to bottom,rgb(2, 6, 14) 0%, #101010 100%)`,
                }}>
            </Box>
        </>
    )
}