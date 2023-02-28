import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarContainer, NavbarHeader } from "../styled/Navbar";
import { useNavContext } from "./NavProvider";
import { Colors } from '../styled/Theme'

export default function NavbarMobile({ matches }) {
    const { setDrawerOpen } = useNavContext()

    return (
        <NavbarContainer>
            <NavbarHeader variant="h5">Petpels</NavbarHeader>
            <IconButton size='large' onClick={() => setDrawerOpen(true)} >
                <MenuIcon sx={{ fontSize: "2.1rem", color: Colors.black}} />
            </IconButton>
        </NavbarContainer>
    )
}