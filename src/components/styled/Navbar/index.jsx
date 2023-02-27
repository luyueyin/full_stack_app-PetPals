import { List, Typography } from "@mui/material";
import { styled  } from "@mui/material/styles"
import { Box } from "@mui/material"
import { theme } from '../Theme';
import '@fontsource/montez';

export const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const NavbarHeader = styled(Typography)(() => ({
    fontSize: '4em',
    flexGrow: 1,
    fontFamily: "Montez",
    color: 'primary'
}))

export const NavList = styled(List)(({ type }) => ({
    display: type === `row` ? 'flex' : 'block',
    flexGrow: .3,
    justifyContent: 'center',
    alignItems: 'center'
}))