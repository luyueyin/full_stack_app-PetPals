import { Box, styled } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import { Colors } from './Theme'


export const Card = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
    }
}))

export const CardImage = styled(Avatar)(({ src, theme }) => ({
    src: `url('${src})`,
    width: '100%',
    background: Colors.grey,
    padding: '10px',
    [theme.breakpoints.up('md')]: {
        width: '80%',
        padding: '24px'
    }
}))

export const CardActionButton = styled(IconButton)(() => ({
    background: Colors.primary,
    margin: 4,
}))

export const CardFavButton = styled(CardFavButton)(({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
}))

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

export const CardMetaWapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const CardActionWapper = styled(Box)(({ isfav, theme }) => ({
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        display: show ? 'visible' : 'none',
        right: 0,
        top: '20%',
    }
}))


