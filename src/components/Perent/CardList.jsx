import { BannerContainer, BannerContent, BannerDescription, BannerImage } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import { Paper, Container, Grid, Stack } from '@mui/material';
import Card from './Card';
import { Colors } from '../styled/Theme';
import styled from 'styled-components';
import useApi from "../utils/useApi"
import ClickedCard from './ClickedCard';
import { padding } from 'polished';
// import axios from 'axio'

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(8),
    border: `1px solid ${Colors.black}`,
}));

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

function CartList() {
    const [ cardsWithoutReview] = useApi('/cards')
    // console.log(cardsWithoutReview)
    const cards = cardsWithoutReview.map((card) => {
        card.point = 5
        return card
    })

    return ( 
        <BannerContainer >
            <Container maxWidth={'1200px'} sx={{minHeight: '85vh',
        padding: '80px'}}>
                    <GridBox>
                        {
                            cards.map((card) => {
                                return (
                                    <Card 
                                        key={"Sitter Card" + card.id}
                                        cardInfo={card}
                                    />
                                )
                            })
                        }
                    </GridBox>
                    <ContentContainer>
                        {/* <ClickedCard /> */}
                </ContentContainer>
            </Container>
        </BannerContainer >
    )
}

export default CartList