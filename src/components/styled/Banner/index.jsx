import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import theme, {Colors} from '../Theme';

export const BannerContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    marginTop: '75px',
    backgroundColor: 'primary',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 420,
    padding: '30px',
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.3,
    fontSize: '80px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '40px',
    }
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.3,
    letterSpacing: 1.1,
    marginBottom: '3em',
    [theme.breakpoints.down('sm')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    },
}))

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '300px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '220px',
        // height: '300px',
    }
}))