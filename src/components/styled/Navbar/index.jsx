import * as React from 'react';
import { List, Typography, IconButton}  from "@mui/material";
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"
// import theme, { Colors } from '../Theme';
import '@fontsource/montez';
import theme, {Colors} from "../Theme"
import curriedAdjustHue from 'polished/lib/color/adjustHue';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled(Box)(() => ({
    display: 'absolute',
    height: '65px',
    backgroundColor: 'white',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1);',
    alignItems: 'center',
    padding: '0rem 3rem 0.35rem 0rem',
    width: '100%',
    position: 'fixed',
    top: 0,
    opacity: 0.8,
}));

export const NavbarMaxWidth = styled(Box)(() => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    alignContent: 'center',
    maxWidth: '1800px',
}));

export const NavbarHeader = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '2.3em',
        paddingLeft: '2rem',
    },
    fontSize: '2.7em',
    flexGrow: 1,
    fontFamily: "Montez",
    color: Colors.secondary,
}))

export const NavList = styled(List)({
    display: 'flex',
    flexGrow: 3,
    justifyContent: 'right',
})


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    bottom: 370,
    right: 15,
    zIndex: 1999,
}))


export const StyledLink = ({to, children}) => {
    return (
        <Link
            to={to}
            style= {{ textDecoration: 'none', color: Colors.black, fontSize: '1.2rem', padding:'2rem' }}
        > {children}</Link>
    )
}