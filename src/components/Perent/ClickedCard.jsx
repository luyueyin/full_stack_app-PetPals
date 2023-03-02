import { BannerContainer, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import Button from '@mui/material/Button';
import { Paper, Container, Grid, Stack, styled, Divider } from '@mui/material';
import { RatingBox, CardText, CardDetailBox, NameBox, AddressBox, CardDescription } from '../styled/Card'
import CartRating from './Rating';

import CardDetail from './CardDetail';




export default function ClickedCard() {


    const cards = [
        {
            "id": 2,
            "name": "Bob",
            "experience": "More than 5 years",
            "phone": "(04) 4635-7736",
            "email": "bob@example.com",
            "address": "East Vinnieton",
            "description": "Excellent communication skills, including regular updates for pet owners while they are away.",
            "img": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Cumbia&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Tanned",
            "value": "4.5"
        },
    ]

    // const handleBack = () => {
    //     <Button href="/petparent/selection/sitters">Link</Button>
    // };

    return (
        <div id='clickedcard'>
            <h1>Details</h1>
            {
                cards.map((card) => {
                    return (
                        <CardDetail key={card.id} card={card} />
                    )
                })
            }
        </div>
    )
}
