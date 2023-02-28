import { ListItemText } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader } from "../styled/Navbar";
import { useState, useEffect } from "react";

export default function NavbarMobile({ matches }) {

    const [ sticky, setSticky ] = useState()

    useEffect(()=> {
        const handleScroll = () => {
            setSticky(window.screenY > 100)
            // console.log(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    })

    return (
        <NavbarContainer position='static' className={`${sticky ? 'sticky' : ''}`}>
            <NavbarHeader>Petpels</NavbarHeader>
            <NavList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Pet Parent" />
                <ListItemText primary="Pet Sitter" />
            </NavList>
        </NavbarContainer>
    )
} 