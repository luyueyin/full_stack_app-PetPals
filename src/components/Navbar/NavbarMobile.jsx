import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarContainer, NavbarHeader, NavbarMobileWidth } from "../styled/Navbar";
import { useNavContext } from "./NavContext";
import { Colors } from '../styled/Theme'
import { Link } from "react-router-dom";
import { setDrawerOpen } from './NavContext';

export default function NavbarMobile({ matches }) {

    const { setDrawerOpen } = useNavContext()

    return (
        <NavbarContainer>
            <NavbarMobileWidth>
                <NavbarHeader variant="h5">Petpels</NavbarHeader>
                <IconButton size='large' onClick={() => setDrawerOpen(true)}>
                
                    <MenuIcon sx={{ fontSize: "2.1rem", color: Colors.secondary }} />
                </IconButton>
            </NavbarMobileWidth>
        </NavbarContainer>
    )
}