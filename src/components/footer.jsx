import { Box, Typography } from "@mui/material"
import { Bodytext } from './styled/Font'
import { Colors } from './styled/Theme'

export default function Footer() {
    return (
        <Box 
            // justifyContent="center"
            sx={{
                backgroundColor: Colors.secondary,
                padding: { xs: 0.5, md: 0.1}


            }}
            
            
        >
            <Bodytext><h6>@ 2023 PetPals</h6></Bodytext>
        </Box>
    )
}