import { ListItemText } from "@mui/material";
import { NavList, NavbarContainer, NavbarHeader } from "../styled/Navbar";
import Divider from '@mui/material/Divider';

export default function NavbarMobile({ matches }) {

    return (
        <NavbarContainer>
            <NavbarHeader>
                Petpels
            </NavbarHeader>
            <NavList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Pet Parent" />
                <ListItemText primary="Pet Sitter" />
            </NavList>
        </NavbarContainer>
    )
} 