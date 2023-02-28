import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarContainer, NavbarHeader } from "../styled/Navbar";
import { useNavContext } from "./NavProvider";


export default function NavbarDesktop({ matches }) {
    const { setDrawerOpen } = useNavContext()

    return (
        <NavbarContainer>
            <NavbarHeader variant="h4">Petpels</NavbarHeader>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
        </NavbarContainer>
    )
}