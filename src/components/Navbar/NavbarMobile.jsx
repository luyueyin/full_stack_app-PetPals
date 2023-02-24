import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarContainer, NavbarHeader } from "../styled/Navbar";


export default function NavbarDesktop({ matches }) {
    return (
        <NavbarContainer>
            <NavbarHeader variant="h4">Petpels</NavbarHeader>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </NavbarContainer>
    )
}