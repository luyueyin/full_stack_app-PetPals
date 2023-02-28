import { createTheme, lighten } from '@mui/material/styles';

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
            main: Colors.grey,
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
                    width: 250,
                    background: Colors.secondary,
                    color: Colors.danger,
                    borderRadius: '0px 100px 0px 0px',
                    borderRight:`2px solid ${Colors.success}`
                }
            }
        },

    }
});


export default theme;