import * as React from 'react';
import { List, Typography, IconButton, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"
import { theme } from '../Theme';
import '@fontsource/montez';
import { lighten } from 'polished';
import closeIcon from '@mui/icons-material';

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


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: '280px',
    zIndex: 1999,
}))




// export default function CloseIcon() {
//     return (
//         <IconButton color="primary" aria-label="upload picture" component="label">
//         <input hidden accept="image/*" type="file" />
//         <closeIcon />
//       </IconButton>
//     )
// } 