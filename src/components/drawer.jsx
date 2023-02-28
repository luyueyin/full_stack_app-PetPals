import { Divider, Drawer, List, ListItemButton } from "@mui/material"
import { styled } from '@mui/system';
import { useNavContext } from './Navbar/NavProvider'
import { DrawerCloseButton } from './styled/Navbar'
import theme, { Colors } from './styled/Theme'
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from 'polished';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useNavContext()


    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: '6rem',
                            backgroundColor: lighten(0.1, Colors.primary),
                            color: Colors.black,
                            borderRadius: '50%',
                            padding: '0.7rem',
                            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'rotate(135deg)',
                            },
                        }}
                    />
                </DrawerCloseButton>
            )}

            <Drawer open={drawerOpen} anchor="bottom">
                <List>
                    <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                        <DoorbellIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                        <Typography variant="h6">Home</Typography>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                        <PetsIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                        <Typography variant="h6">Pet Parent</Typography>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                        <AssignmentIndIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                        <Typography variant="h6">Pet Sitter</Typography>
                    </ListItemButton>

                </List>
            </Drawer>
        </>

    )
}

