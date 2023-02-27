import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from "./Theme"




export const CustomButton = styled(Button)({
        borderRadius: 50,
        padding: '10px 60px 10px 60px',
        fontSize: '18px',
        textTransform: 'none',
        color: 'palette.success',
        backgroundColor: 'primary',
        textSpacing: '35',
        variant: "contained",
        "&:hover": {
            backgroundColor: 'secondary',
        },
        "&:disabled": {
            backgroundColor: 'success',
            color: 'white'
        }

    });


// export default function StyledButton(props) {


//     const StyleButton = styled(Button)({
//         borderRadius: 25,
//         padding: '10px 50px 10px 50px',
//         fontSize: '15px',
//         textTransform: 'none',
//         color: Colors.white,
//         backgroundColor: Colors.secondary,
//         textSpacing: '30'
//     });

//     return (
//         <stack spacing={5}>
//             <Stack spacing={9} direction="row">
//                 <ThemeProvider theme={theme}>
//                     <StyleButton
//                         variant="contained"
//                         onClick={props.onClick}
//                         style={StyleButton}
//                         theme={theme}

//                     >
//                         {props.text}
//                     </StyleButton>
//                 </ThemeProvider>
//             </Stack>
//         </stack>
//     );
// }