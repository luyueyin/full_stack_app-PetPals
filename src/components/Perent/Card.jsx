import CartRating from './Rating';
import { CardWrapper, CardText } from '../styled/Card'


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
                        <CardText>{card.address}</CardText>
                        <CardText>{card.Description}</CardText>
                        <CardText><CartRating value={card.value} /></CardText>
                    </div>
                </CardWrapper>
    )
}
