import { createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Colors = {
    primary: '#aec3b0',
    secondary: '#5b6eeb',
    white: '#fffcf2',
    black: '#000814',
    grey: '#003049',
    background: '#d0d8dc',
    danger: "#e3d5ca",
    success: "#d62828",
    body_bg: '#f3f6f9',
    dk_primary: '#003049',
    box_bg: '#f3f6f9',
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
            // contrastText: Colors.white,
            background: Colors.danger,
        },
        secondary: {
            main: Colors.secondary,
            contrastText: Colors.black
        },
        otherColors: {
            main: Colors.success
        }
    },

    components: {
        MuiDrawer: {
            styleOverrides: {

                paper: {
                    height: 'auto',
                    width: '100%',
                    background: Colors.primary,
                    borderRadius: '0px 170px 0px 0px',
                    borderTop: `2px solid ${Colors.secondary}`,
                    padding: '20px 30px 30px 30px',
                },
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: lighten(0.2, Colors.primary)
                }
            }
        },

    }
});


export default theme;