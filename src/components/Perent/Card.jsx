import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { OptionBox } from '../styled/StyledContainer';
import CartRating from './Rating';

import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { CardWrapper, CardText } from '../styled/Card'
import { Icontext } from '../styled/Font';

import Button from '@mui/material/Button';
import { height } from '@mui/system';



export default function Card(props) {

    const card = props.cardInfo

    // const [itemOnCart, setItemOnCart] = useState(0)

    // const navigate = useNavigate()

    // function handleAddToCart(e) {
    //     e.stopPropagation()
    //     setItemOnCart((prevState) => {
    //         return prevState + 1
    //     })
    // }

    return (
        // <Div onClick={() => {
        //     navigate(`card/${item._id}`)

        // }}>

                <CardWrapper>
                    <img style={{ height: 180, marginBottom: '20px' }} src={card.img} />
                    <div>
                        <CardText>{card.name}</CardText>
                        <CardText>{card.experience}</CardText>
                        <CardText>{card.phone}</CardText>
                        <CardText>{card.email}</CardText>
                        <CardText>{card.address}</CardText>
                        <CardText>{card.Description}</CardText>
                        <CardText><CartRating value={card.value} /></CardText>
                    </div>
                </CardWrapper>
    )
}
