// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// const STYLE = ['btn--primary', 'btn--outline']

// export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
//     const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
// }


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
    return (

        <stack spacing={5}>


            <Stack spacing={2} direction="row" onClick>
            <Button variant="text">Outlined</Button>
                <Button variant="contained" color='warning' href='https://google/com'>Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            const checkButtonStyle = style.includes(buttonStyle) ? <Button variant="contained" color='warning'>Contained</Button> : <Button variant="outlined">Outlined</Button>;


        </stack>
    );
}