import { Grid, Box, styled, Typography } from "@mui/material";
import theme, { Colors } from "../Theme"

export const IntroContainer2 = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '60px 0px 90px 0px'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '20px 20px 20px 0px',
    background: Colors.light
}))

export const ButtonContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    columnGap: '3rem',
    justifyContent: 'center',
}))

export const IntroText2 = styled(Typography)(({ theme }) => ({
    fontFamily: '"cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    color: Colors.primary,
    fontSize: '0.9rem',
    marginBottom: '.5rem',
}))
