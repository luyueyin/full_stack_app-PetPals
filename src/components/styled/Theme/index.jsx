import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#88b3b5',
            light: '#d1eced',
            contrastText: '#293a3b',
        },
        secondary: {
            light: '#8f9cf2',
            main: '#5b6eeb',
            contrastText: '#ffcc00'
        },
        otherColors: {
            white: '#ebf2f2',
            black: '#161a19',
            grey: '#bbbfbf',
            background: '#d0d8dc',
            danger: "#db301d",
            success: "#4caf50",
        }
    },

    components: {
        Button: {
            defaultProps: {
                disableRipple: true,
                dispatchEvent: true
            }
        }
    }
});


export default theme;