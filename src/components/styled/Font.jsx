import { styled, Typography } from "@mui/material";

export const Bodytext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    fontSize: '1.9rem',
    textAlign: 'center',
    // lineHeight: '2.5rem',
}))