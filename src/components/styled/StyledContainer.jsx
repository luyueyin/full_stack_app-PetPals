import { Box, styled } from "@mui/material";
import theme, {Colors} from "./Theme"


export const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '80px 0px 40px 0px',
        maxwidth: '1400px',

    },
    display: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
}))


//----------------------------------------------------------------
//ButtonGroup Section
//----------------------------------------------------------------

export const IntroButtonContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '80px 0px 90px 0px'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 20px 20px 0px',
    // background: 'green',
}))


//----------------------------------------------------------------
//Service Section
//----------------------------------------------------------------


export const ServiceContainer = styled(Box)({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    padding: '2% 10%',
    background: 'green',
    width: '80%',
})






