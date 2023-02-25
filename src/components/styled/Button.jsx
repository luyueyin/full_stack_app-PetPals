import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import theme, { Colors } from "../styled/Theme"

export default function Buttons(props) {
    useEffect(() => {
        document.title = 'React Material UI - Home';
    }, []);
    const buttonStyle = {
        borderRadius: 18
    };

    return (
        <stack spacing={5}>
            <Stack spacing={9} direction="row" onClick>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color='success'
                        onClick={props.onClick}
                        style={buttonStyle}
                    >
                        {props.text}
                    </Button>
                </ThemeProvider>
            </Stack>
        </stack>
    );
}