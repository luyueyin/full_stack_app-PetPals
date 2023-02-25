import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import theme, { Colors } from "../styled/Theme"

export default function Buttons(props) {
    useEffect(() => {
        document.title = 'React Material UI - Home';
    }, []);
    const StyledButton = {
        borderRadius: 25,
        padding: '10px 50px 10px 50px',
        fontSize: '15px',
        textTransform: 'none',
        color: Colors.white,
        backgroundColor: Colors.secondary,
        textSpacing: '30'
    };

    return (
        <stack spacing={5}>
            <Stack spacing={9} direction="row">
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        onClick={props.onClick}
                        style={StyledButton}
                    >
                        {props.text}
                    </Button>
                </ThemeProvider>
            </Stack>
        </stack>
    );
}