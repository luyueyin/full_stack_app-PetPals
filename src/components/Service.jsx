import { IntroText, IntroButtonContainer, ServiceContainer, Bodytext } from './styled/StyledIntro'
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
// import Stack from '@mui/material/Stack';
import { Grid, Box, styled, Typography, Stack, useMediaQuery } from "@mui/material";


// const Icon = styled.box(({ theme }) => ({
//     marginRight: theme.spacing(10),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: '100%',
//     spacing: '6',
// }));


const SectionTitle = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
}));


export default function Service() {
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

    return (
        <IntroButtonContainer>
            <ServiceContainer>
                <Bodytext>
                    <h1>Why us ?</h1>
                </Bodytext>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container
                        spacing={{ xs: 6, md: 8 }}
                        justifyContent="center"
                        columnSpacing={{ xs: 6, md: 3 }}
                        columns={{ xs: 3, sm: 8, md: 6 }}
                        // padding='80px 0px 50px 0px'
                        flexDirection="sm:column, md:row"
                    >
                        <Grid container item
                            // xs={12} sm={9} md={2} 
                            display='flex'
                            alignItems='center'
                            justifyContent="center"
                        // spacing={20}
                        >
                            {<SectionTitle>
                                <MeetingRoomRoundedIcon color="secondary" sx={{ fontSize: 100 }} marginRight="80px" />
                            </SectionTitle>}


                            <Grid
                                container item
                                // xs={12} sm={9} md={10} 
                            >
                                <Bodytext>
                                    <h2>Drop-In Visits</h2>
                                    <h6>Come to your home and take care of your pet while you're away. They will play with your pets, offer food and water, give potty breaks or clean the litter box, and provide any other necessary care.</h6>
                                </Bodytext>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>



            </ServiceContainer>
        </IntroButtonContainer >

    )
}

//                         <DirectionsCarRoundedIcon color="secondary" sx={{ fontSize: 50 }} />
