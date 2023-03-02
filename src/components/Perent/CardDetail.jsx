import { CardWrapper, CardText } from '../styled/Card'
import CartRating from './Rating';





export default function CardDetail(props) {

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
    const card = props.detail

    return (
        <div>
            {
                cards.map((card) => {
                    return (
                        <CardWrapper>
                            <img style={{ height: 180, marginBottom: '20px' }} src={card.img} />
                            <div>
                                <CardText>{card.name}</CardText>
                                <CardText>{card.experience}</CardText>
                                <CardText>{card.address}</CardText>
                                <CardText>{card.phone}</CardText>
                                <CardText>{card.email}</CardText>
                                <CardText style={{textAlign: 'center'}}>{card.description}</CardText>
                                <CardText><CartRating value={card.value} /></CardText>
                            </div>
                        </CardWrapper>

                    )
                })
            }

        </div>
    )
}
