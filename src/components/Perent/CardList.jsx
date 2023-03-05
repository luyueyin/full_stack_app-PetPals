import { BannerContainer, BannerContent, BannerDescription, BannerImage } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import { Paper, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './Card';
import { Colors } from '../styled/Theme';
import styled from 'styled-components';
import useApi from "../utils/useApi"
import ClickedCard from './ClickedCard';
import { padding } from 'polished';




const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: '10px 10px';
`

function CartList(props) {
    const [cardsWithoutReview] = useApi('/cards')
    // console.log(cardsWithoutReview)
    const cards = cardsWithoutReview.map((card) => {
        card.point = 5
        return card
    })

    return (
        <BannerContainer >
            <ContentContainer maxWidth={'1200px'} sx={{ flexGrow: 1, minHeight: '90vh', padding: '20px 40px' }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {

                        cards.map((card) => {
                            return (
                                <Grid xs={4} sm={4} md={4} >
                                    <Card
                                        key={"Sitter Card" + card.id}
                                        cardInfo={card}
                                        setItem={props.setItem}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <ContentContainer>
                    {/* <ClickedCard /> */}
                </ContentContainer>
            </ContentContainer>
        </BannerContainer >
    )
}

export default CartList