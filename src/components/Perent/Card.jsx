import CartRating from './Rating';
import { CardWrapper, CardText } from '../styled/Card'
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";

export default function Card(props) {

    const [showDetails, setShowDetails] = useState(false);
    const [clickedCard, setClickedCard] = useState(null);

    const handleCardClick = (id) => {
        if (id === clickedCard) {
            setShowDetails(!showDetails);
        } else {
            setShowDetails(!showDetails);
            setClickedCard(id);
        }
    };

    const card = props.cardInfo

    return (
        <CardWrapper onClick={() => handleCardClick(card.id)}>

            <img style={{ height: 180, marginBottom: '20px' }} src={card.img} />
            <div>
                <CardText>{card.name}</CardText>
                <CardText>{card.experience}</CardText>
                <CardText>{card.city}</CardText>
                    {showDetails && (
                <>
                    <CardText>{card.phone}</CardText>
                    <CardText>{card.email}</CardText>
                </>
                    )}
                <CardText>{card.description}</CardText>
                <CardText><CartRating value={card.point} /></CardText>
            </div>
        </CardWrapper>
    )
}
