import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "./styled/Banner"
import { Bodytext } from './styled/Font'
import { ContentContainer, StyledContainer, ServiceBox, IconBox } from './styled/StyledContainer'
import { Colors } from './styled/Theme'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Icontext } from './styled/Font'
import BlindIcon from '@mui/icons-material/Blind';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        height: 170,

    },
    padding: theme.spacing(4.3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
    borderRadius: 30,
    height: 110,
}));


export default function FindingSitter() {

    return (
        <BannerContainer>
            <ContentContainer>
                <Bodytext>
                    <h1>Let's find your perfect pet sitter</h1>
                </Bodytext>

                <Box sx={{ flexGrow: 1, marginTop: 8 }}>
                    <Grid container spacing={2}>
                        <Grid xs={6} md={4}>
                            <Item>
                                <LightModeIcon fontSize='large' />
                                <Icontext>Day Care</Icontext>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <NightsStayIcon fontSize='large' />
                                <Icontext>Overnight Care</Icontext>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <LocalTaxiIcon fontSize='large' />
                                <Icontext>Pet Taxi</Icontext>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={6}>
                            <Item>
                                <BlindIcon fontSize='large' />
                                <Icontext>Dog Walking</Icontext>
                            </Item>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Item>
                                <MapsHomeWorkIcon fontSize='large' />
                                <Icontext>Drop-In Visits</Icontext>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>








            </ContentContainer>



        </BannerContainer>
    )
}