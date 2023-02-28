import { IntroButtonContainer, ServiceContainer } from './styled/StyledIntro'
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
// import Stack from '@mui/material/Stack';
import { Grid, Box, styled, Typography, Stack, useMediaQuery, Paper } from "@mui/material";
import { Bodytext } from './styled/Font'
import { color } from '@mui/system';
import { Padding } from '@mui/icons-material';
import { Colors } from './styled/Theme';
import { useEffect, useState } from "react"


const message = [
    "Come to your home and take care of your pet while you're away. They will play with your pets, offer food and water, give potty breaks or clean the litter box, and provide any other necessary care.",
    "Spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
    "Provide round-the-clock care for your pet, and stay overnight in your sitter’s home.",
    "Take your dog for a walk while you're away. Perfect for busy days and dogs with extra energy to burn.",
    "Provide transportation for your pet to and from appointments, such as vet visits."
]

const title = [
    "Drop-In Visits", "Drop-In Visits,", "Drop-In Visits"
]


// const Services = styled(Stack)(({ theme }) => ({
//     [theme.breakpoints.up('sm')]: {
//         direction: 'row',
//     },
//     direction: 'column',
//     spacing: '10',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '10 40px',
// }))

export default function Service() {

    // const [serviceTypeIndex, setServiceTypeIndex] = useState(0)

    // useEffect(() => {
    //     const TypeIndex = setServiceTypeIndex(() => {

    //         setServiceTypeIndex(i => i + 1)
    //     })

    //     return () => {
    //         serviceTypeIndex(TypeIndex);
    //     }
    // },[])


    return (
        <IntroButtonContainer>
            <Bodytext>
                <h1>Why us ?</h1>
            </Bodytext>


            <ServiceContainer>

                {/* 1 */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    backgroundColor={Colors.dk_primary}
                    margin={'30px'}
                    spacing={{ sm: -4, md: 8 }}
                    padding={'8px 40px'}
                    borderRadius={'30px'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    Width={'100%'}
                >
                    <Stack
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        marginTop={'50px'}
                        spacing={{ sm: -3, md: -2 }}
                    >
                        <MeetingRoomRoundedIcon color="" sx={{ fontSize: 60, width: 200 }} />
                        <Bodytext><h4>Drop-In Visits"</h4></Bodytext>
                    </Stack>
                    <Bodytext textAlign={{ sm: 'center', md: 'left' }}>
                        <h6>{message[0]}</h6>
                    </Bodytext>
                </Stack>


                {/* 2 */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    backgroundColor={Colors.dk_primary}
                    margin={'30px'}
                    spacing={{ sm: -4, md: 8 }}
                    padding={'8px 40px'}
                    borderRadius={'30px'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    Width={'100%'}
                >
                    <Stack
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        marginTop={'50px'}
                        spacing={{ sm: -3, md: -2 }}
                    >
                        <MeetingRoomRoundedIcon color="" sx={{ fontSize: 60, width: 200 }} />
                        <Bodytext><h4>Day Care</h4></Bodytext>
                    </Stack>
                    <Bodytext textAlign={{ sm: 'center', md: 'left' }}>
                        <h6>{message[1]}</h6>
                    </Bodytext>
                </Stack>


                {/* 3 */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    backgroundColor={Colors.dk_primary}
                    // margin={'30px'}
                    spacing={{ sm: -4, md: 8 }}
                    // padding={'8px 40px'}
                    borderRadius={'30px'}
                    alignItems={'center'}
                    justifyContent={'left'}
                    Width={'100%'}
                >
                    <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        marginTop={'50px'}
                        spacing={{ sm: -3, md: -2 }}
                    >
                        <MeetingRoomRoundedIcon color="" sx={{ fontSize: 60, width: 200 }} />
                        <Bodytext><h4>Overnight Care</h4></Bodytext>
                    </Stack>
                    <Bodytext textAlign={{ sm: 'center', md: 'left' }}>
                        <h6>{message[2]}</h6>
                    </Bodytext>
                </Stack>


                {/* 4 */}
                {/* <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    backgroundColor={Colors.dk_primary}
                    margin={'30px'}
                    spacing={{ sm: -4, md: 8 }}
                    // padding={'8px 40px'}
                    borderRadius={'30px'}
                    alignItems={'center'}
                    justifyContent={'left'}
                    Width={'100%'}
                >
                    <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        marginTop={'50px'}
                        spacing={{ sm: -3, md: -2 }}
                    >
                        <MeetingRoomRoundedIcon color="" sx={{ fontSize: 60, width: 200 }} />
                        <Bodytext><h4>Dog Walking</h4></Bodytext>
                    </Stack>
                    <Bodytext textAlign={{ sm: 'center', md: 'left' }}>
                        <h6>{message[3]}</h6>
                    </Bodytext>
                </Stack> */}

                {/* 5 */}
                {/* <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    backgroundColor={Colors.dk_primary}
                    spacing={{ sm: -4, md: 8 }}
                    borderRadius={'30px'}
                    alignItems={'center'}
                    justifyContent={'left'}
                    Width={'100%'}
                >
                    <Stack
                        alignItems={'center'}
                        justifyContent={'left'}
                        marginTop={'50px'}
                        spacing={{ sm: -3, md: -2 }}
                    >
                        <MeetingRoomRoundedIcon color="" sx={{ fontSize: 60, width: 200 }} />
                        <Bodytext><h4>Drop-In Visits</h4></Bodytext>
                    </Stack>
                    <Bodytext textAlign={{ sm: 'center', md: 'left' }}>
                        <h6>{message[4]}</h6>
                    </Bodytext>
                </Stack> */}
            </ServiceContainer>
        </IntroButtonContainer >

    )
}

//                         <DirectionsCarRoundedIcon color="secondary" sx={{ fontSize: 50 }} />
