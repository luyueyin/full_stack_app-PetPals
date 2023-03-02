import CartRating from './Rating';
import { CardWrapper, CardText } from '../styled/Card'
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";


export default function Card(props) {

    const [showDetails, setShowDetails] = useState(false);

    const handleCardClick = () => {
        setShowDetails(!showDetails);
    };

    const card = props.cardInfo
    const navigate = useNavigate()

    return (
        <CardWrapper onClick={handleCardClick}>
            <img style={{ height: 180, marginBottom: '20px' }} src={card.img} />

            <div>

                <CardText>{card.name}</CardText>
                <CardText>{card.experience}</CardText>
                <CardText>{card.address}</CardText>
                    {showDetails && (
                <>
                    <CardText>{card.address}</CardText>
                    <CardText>{card.phone}</CardText>
                    <CardText>{card.email}</CardText>
                </>
                    )}

                <CardText>{card.Description}</CardText>
                <CardText><CartRating value={card.value} /></CardText>
            </div>
        </CardWrapper>
    )
}
