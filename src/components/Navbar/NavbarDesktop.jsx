import { ListItemText, Typography } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader, StyledLink } from "../styled/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Colors } from '../styled/Theme'




export default function NavbarDesktop({ matches }) {

    // const [sticky, setSticky] = useState()

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setSticky(window.screenY > 100)
    //         // console.log(window.scrollY);
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // })

    return (
        <NavbarContainer position='static'>
            <NavbarHeader>Petpels</NavbarHeader>
            <NavList type="row">
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/petparent'>Pet Parent</StyledLink>
                <StyledLink to='/petsitter'>Pet Sitter</StyledLink>
            </NavList>
        </NavbarContainer>
    )
} 