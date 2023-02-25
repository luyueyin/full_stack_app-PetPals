import { Grid, Box, styled, Typography } from "@mui/material";
import theme, { Colors } from "./Theme"


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
    fontSize: '1.2rem',
    textAlign: 'center',
    maxWidth: '80%',
}))

//----------------------------------------------------------------
//ButtonGroup Section
//----------------------------------------------------------------

export const IntroButtonContainer = styled(Box)(({ theme }) => ({
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
    [theme.breakpoints.up('md')]: {
        // padding: '60px 0px 90px 0px'
    },
    display: 'flex',
    flexDirection: 'row',
    columnGap: '3rem',
    justifyContent: 'center',
}))


//----------------------------------------------------------------
//Service Section
//----------------------------------------------------------------


export const ServiceContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '70px 90px 80px90px'
    },
    // flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '70px',
    background: Colors.light
}))



export const Bodytext = styled(Typography)(({ theme }) => ({
    fontFamily: '"cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.9rem',
        maxWidth: '900px',
        textAlign: 'left',
    },
    color: Colors.success,
    fontSize: '1.9rem',
    textAlign: 'center',

}))



