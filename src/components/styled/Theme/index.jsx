import { createTheme } from '@mui/material/styles';

export const Colors = {
    primary: '#ce93d8',
    secondary: '#88b3b5',
    white: '#FFF',
    darf: '#edcef0',
    light: '#f5f5f5',
    grey: '#a8a8a8',
    background: '#d0d8dc',
    inverse: '#3f3d4a',
    success: "#4caf50",
    danger: "#ff5722"
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
            light: '#dca1e6',
            contrastText: '#fef5ff'
        },
        secondary: {
            // light: '0086ff',
            main: Colors.secondary,
            // contrastText: '#ffcc00'
        },
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