import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { Paper, Container, Grid, Stack, styled } from '@mui/material';
import { OptionBox } from '../styled/StyledContainer';
import Card from './Card';
import { Colors } from '../styled/Theme';

import IconLabelButtons from './IconButton';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { cards } from '../../data/Sitters'
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(8),
    border: `1px solid ${Colors.black}`,
}));


function CartList() {
    const cards = [
        {
            "id": 1,
            "name": "Alice",
            "experience": "5 years",
            "phone": "(04) 1666-4784",
            "email": "alice@example.com",
            "address": "Catalinaton",
            "Description:": "Professional pet sitter with 5 years of experience. Flexible scheduling to accommodate clients' needs",
            "img": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Yellow",
            "value": "5"
        },
        {
            "id": 2,
            "name": "Bob",
            "experience": "More than 5 years",
            "phone": "(04) 4635-7736",
            "email": "bob@example.com",
            "address": "East Vinnieton",
            "Description:": "Excellent communication skills, including regular updates for pet owners while they are away.",
            "img": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Cumbia&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Tanned",
            "value": "4.5"
        },
        {
            "id": 3,
            "name": "Charlie",
            "experience": "1 year",
            "phone": "(02) 4861-4744",
            "email": "charlie@example.com",
            "address": "South Noemietown",
            "Description:": "Skilled in providing exceptional care and attention to pets of all types and sizes.",
            "img": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=EyeRoll&eyebrowType=UpDown&mouthType=Tongue&skinColor=Black",
            "value": "4"
        },
    ]

    const handleBack = () => {
        <Button href="/petparent/selection">Link</Button>
    };



    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>
                <ContentContainer>

                    <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{ mr: 3 }}
                    >
                        Back
                    </Button>
                    <Button color="inherit" href="/petparent">Back</Button>

                    {/* <Stack display={'flex'} width={'100%'}> */}
                    <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}
                        >
                            <CardBox>
                                {
                                    cards.map((card) => {
                                        return (
                                            <Card key={card.id} cardInfo={card} />
                                        )
                                    })
                                }
                            </CardBox>
                        </Grid>
                    </Grid>
                    {/* </Stack> */}


                </ContentContainer>
            </Container>
        </BannerContainer >
    )
}

export default CartList