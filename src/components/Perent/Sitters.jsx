import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { Box, Container } from '@mui/material';
import { OptionBox } from '../styled/StyledContainer';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Sitters } from '../../data/Sitters'

// import Card from './SitterInfor';

function SitterInfo() {

    // const renderSitters = Sitters.map(sitter => (

    // ))
    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>
                <ContentContainer>
                    <Bodytext>
                        <h1>Let's find your perfect pet sitter</h1>
                    </Bodytext>
                    <Avatar
                        avatarStyle='Circle'
                        topType='ShortHairShortWaved'
                        accessoriesType='Sunglasses'
                        hairColor='Auburn'
                        facialHairType='BeardMajestic'
                        facialHairColor='Black'
                        clotheType='ShirtVNeck'
                        clotheColor='Blue01'
                        eyeType='Dizzy'
                        eyebrowType='UpDownNatural'
                        mouthType='Eating'
                        skinColor='DarkBrown'
                    />
                    <OptionBox width={'100%'}>
                        /petparent/selection/sitters
                        {/* <OneSitter /> */}

                    </OptionBox>
                </ContentContainer>
            </Container>
        </BannerContainer>
    )
}

export default SitterInfo