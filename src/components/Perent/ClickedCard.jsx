import { BannerContainer, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import Button from '@mui/material/Button';
import { Paper, Container, Grid, Stack, Divider } from '@mui/material';
import { RatingBox, CardText, CardDetailBox, NameBox, AddressBox, CardDescription } from '../styled/Card'
import CartRating from './Rating';
import CardDetail from './CardDetail';
import styled from 'styled-components';
import Card from './Card';

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
`

const DetailWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ClickedCard(props) {

    const card = props.card

    if (!card) {
        return null;
    }
    return (
        <div id='clickedcard'>
            <DetailWapper>
                <h1>Clicked Card</h1>
                <Card cardDetail={card} />
                {/* {
                    cards.map((card) => {
                        return (
                            <CardDetail key={card.id} detail={card}/>
                        )
                    })
                } */}
            </DetailWapper>
        </div>
    )
}
