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
    zIndex: 999,
    // lighten: '0.09, Colors.secondary'
}))




// export default function CloseIcon() {
//     return (
//         <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//             <SpeedDial
//                 ariaLabel="SpeedDial openIcon example"
//                 sx={{ position: 'absolute', bottom: 16, right: 16 }}
//                 icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
//             >
//             </SpeedDial>
//         </Box>
//     );
// }