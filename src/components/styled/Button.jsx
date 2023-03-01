import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from './Theme'
import { Colors } from './Theme';
import { lighten } from 'polished';

const BootstrapButton = styled(Button)({
    textTransform: 'none',
    fontSize: 18,
    padding: '7px 38px',
    borderRadius: '60px',
    lineHeight: 1.5,
    fontFamily: [
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: Colors.primary,
        borderColor: 'secondary',
    },

    '&:active': {
        backgroundColor: lighten(1, Colors.primary),
    },

    // '&:focus': {
    //     boxShadow: '0 0 0 0.1rem rgba(0,123,255,.3)',
    // },
});


export default function CustomizedButtons(props) {
    return (
        <Stack spacing={2} direction="row">
            <BootstrapButton variant="contained" onClick={props.onClick} disableRipple>
                {props.text}
            </BootstrapButton>
        </Stack>
    );
};




export const SelectionButton = styled(Button)(({ props }) => ({

    padding: '80px 0px 40px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'lightblue',
}))