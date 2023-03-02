import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { Paper, Container, Grid, Stack } from '@mui/material';
import { OptionBox } from '../styled/StyledContainer';
import Card from './Card';
import { Colors } from '../styled/Theme';
import styled from 'styled-components';

import IconLabelButtons from './IconButton';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { cards } from '../../data/Sitters'
import Button from '@mui/material/Button';
import ClickedCard from './ClickedCard';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(8),
    border: `1px solid ${Colors.black}`,
    
}));


const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


function CartList() {

    const handleBack = () => {
        <Button href="/petparent/selection">Link</Button>
    };



    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>


                    <Button
                        color="inherit"
                        onClick={handleBack}
                        href="/petparent"
                    >Back
                    </Button>

                    <GridBox>
                        {
                            cards.map((card) => {
                                return (
                                    <Card key={card.id} cardInfo={card} />
                                )
                            })
                        }
                    </GridBox>
                    <ContentContainer>
                        <ClickedCard />


                </ContentContainer>
            </Container>
        </BannerContainer >
    )
}

export default CartList