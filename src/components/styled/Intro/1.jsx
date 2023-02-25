import { Box, styled, Typography } from "@mui/material";
import theme, { Colors } from "../Theme"


export const IntroContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '40px 0px 40px 0px'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    background: Colors.background
}))
    
export const IntroText = styled(Typography)(({ theme }) => ({
    fontFamily: '"cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
    },
    color: Colors.success,
    fontSize: '1.2rem'
}))
