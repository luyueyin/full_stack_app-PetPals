import { styled, Typography } from "@mui/material";
import { Colors } from "./Theme";

export const Bodytext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
    fontSize: '1.9rem',
    textAlign: 'center',
    lineHeight: '5.2rem',
}))

export const Footertext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
    fontSize: '1.5rem',
    textAlign: 'center',
}))

export const Icontext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    marginLeft: '1rem',
    fontSize: '1rem',
    color: Colors.black
}))
