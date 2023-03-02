import { useState } from "react"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import { Card, CardImage } from '../styled/Card'

import Button from '@mui/material/Button';


export function SitterCard(props) {
    const item = props.productInfo
    const [itemOnCart, setItemOnCart] = useState(0)

    const navigate = useNavigate()

    // function handleAddToCart(e) {
    //     e.stopPropagation()
    //     setItemOnCart((prevState) => {
    //         return prevState + 1
    //     })
    // }

    return (
        <Wrapper onClick={() => {
            navigate(`product/${item._id}`)
        }}>
            <Card>
                <CardImage src={'/static/images/avatar/1.jpg'}>

                </CardImage>

            </Card>

        </Wrapper>
    )
}


export default SitterCard


    // < Avatar alt = "Remy Sharp" src = "/static/images/avatar/1.jpg" />
    //   <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    //   <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
