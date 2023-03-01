import { Box, Container } from "@mui/material"
import { Footertext } from '../styled/Font'


export default function Footer() {
    return (
        <Box
            // 
            sx={{
                height: { xs: '10rem', md: '4rem' },
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderTop: '1px solid gray',
            }}
        >
            <Footertext>@ 2023 PetPals</Footertext>
        </Box>
    )
}