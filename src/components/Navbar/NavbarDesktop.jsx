import { ListItemText, Typography } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader, StyledLink, NavbarMaxWidth } from "../styled/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Box } from "@mui/material"

export default function NavbarDesktop({ matches }) {

    return (

        <NavbarContainer>
            <NavbarMaxWidth>
                <StyledLink to='/'><NavbarHeader>Petpels</NavbarHeader></StyledLink>
                <NavList type="row">
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/petparent'>Pet Parent</StyledLink>
                    <StyledLink to='/petsitter'>Pet Sitter</StyledLink>
                </NavList>
            </NavbarMaxWidth>
        </NavbarContainer>
    )
} 