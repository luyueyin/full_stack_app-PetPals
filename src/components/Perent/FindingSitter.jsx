import { BannerContainer } from '../styled/Banner';
import { Bodytext } from '../styled/Font';
import { ContentContainer } from '../styled/StyledContainer';
import { Colors } from '../styled/Theme'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { IconTitle } from '../styled/Font'
import BlindIcon from '@mui/icons-material/Blind';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { OptionBox } from '../styled/StyledContainer';

import { styled } from '@mui/material/styles';
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
    backgroundColor: Colors.white,
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

                <OptionBox>
                    <Grid container spacing={2}>
                        <Grid xs={6} md={4}>
                            <Item>
                                <LightModeIcon fontSize='large' />
                                <IconTitle>Day Care</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <NightsStayIcon fontSize='large' />
                                <IconTitle>Overnight Care</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <LocalTaxiIcon fontSize='large' />
                                <IconTitle>Pet Taxi</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={6}>
                            <Item>
                                <BlindIcon fontSize='large' />
                                <IconTitle>Dog Walking</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Item>
                                <MapsHomeWorkIcon fontSize='large' />
                                <IconTitle>Drop-In Visits</IconTitle>
                            </Item>
                        </Grid>
                    </Grid>
                </OptionBox>
            </ContentContainer>
        </BannerContainer>
    )
}