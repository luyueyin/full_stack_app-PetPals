import { Box, Container, styled } from "@mui/material";
import { Colors } from "./Theme";

export const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '80px 0px 40px 0px',
        maxwidth: '1400px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'lightblue',
}))

export const ContentContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6% 10%',
    // background: Colors.white,
})

export const ServiceBox = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        direction: 'row',
        padding: '30px 50px',
        
    },
    direction: 'column',
    margin: '20px',
    padding: '8px 40px',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    Width: '100px',
    // border: `1px solid ${Colors.black}`,
    boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.2);',
}))


export const IconBox = styled(Box)({
    padding: '30px',
    display: 'flex',
    marginRight: '1rem',
})

