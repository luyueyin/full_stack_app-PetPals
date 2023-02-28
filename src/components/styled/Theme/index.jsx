import { createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Colors = {
    primary: '#88b3b5',
    secondary: '#5b6eeb',
    white: '#ebf2f2',
    black: '#161a19',
    grey: '#bbbfbf',
    background: '#d0d8dc',
    danger: "#db301d",
    success: "#4caf50",
    body_bg: '#f3f6f9',
    dk_primary: '#79a6a8',
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
            dark: Colors.dk_primary,
            contrastText: Colors.white,
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