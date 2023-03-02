import { Box, styled, } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton, Button, show } from '@mui/material';
import theme, { Colors } from './Theme';


export const CardWrapper = styled(Box)(({ theme }) => ({
    padding: '28px 35px 32px 35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0.1px rgba(0, 8, 0, 0.15)',
    borderRadius: '30px',
    transition: '0.3s',
    cursor: 'pointer',
    // backgroundColor: Colors.white,
    ' &:hover': {
        boxShadow: '0px 0px 20px 1px rgba(13, 12, 12, 0.35)'
    },

    [theme.breakpoints.up('md')]: {
        position: 'relative',
        maxWidth: '500px',
    }
}))


export const CardActionButton = styled(IconButton)(() => ({
    background: Colors.primary,
    margin: 4,
}))

// export const CardFavButton = styled(CardFavButton)(({ isfav, theme }) => ({
//     color: isfav ? Colors.primary : Colors.light,
//     [theme.breakpoints.up('md')]: {
//         position: 'absolute',
//         right: 0,
//         top: 0,
//     },
// }))

export const AddToCard = styled(Button)(() => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        buttom: '2%',
        width: '300px',
        padding: '10px 5px',
    },
    background: Colors.secondary,
    opacity: 0.9,

}))

export const CardText = styled(Box)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const CardActionWapper = styled(Box)(({ isfav, theme }) => ({
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        // display: show ? 'visible' : 'none',
        right: 0,
        top: '20%',
    }
}))


