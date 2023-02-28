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
    display: 'flex',
    height: '90px',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    maxWidth: '1800px',

}));

export const NavbarHeader = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '4em',
        paddingLeft: '2rem',
    },
    fontSize: '3em',
    flexGrow: 1,
    fontFamily: "Montez",
    cursor: 'pointer',
    color: Colors.secondary,
}))

export const NavList = styled(List)(({ type }) => ({
    display: type === `row` ? 'flex' : 'block',
    flexGrow: .3,
    justifyContent: 'space-between',
    alignItems: 'center',
}))


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    bottom: 370,
    right: 15,
    zIndex: 1999,
}))


export const StyledLink = styled(Link)(() => ({
    color: Colors.secondary,
    textUnderlineOffset: 0,
}))