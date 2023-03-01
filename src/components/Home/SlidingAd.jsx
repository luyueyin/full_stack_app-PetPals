import { Slide } from "@mui/material";
import { useEffect, useState } from "react"
import { StyledContainer } from "../styled/StyledContainer"
import { Bodytext } from '../styled/Font';


const messages = [
    "Thousands of pet sitters in your area",
    "Match by needs and schedule",
    "Read references & reviews",
    "Contact directly",
    "Free virtual or in-person meetings before booking"
]


export default function Intro() {

    const [messagesIndex, setMessageIndex] = useState(0);
    const [showMessage, setshowMessage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshowMessage(false)
        })
    }, 3000);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setshowMessage(true);

            setTimeout(() => {
                setshowMessage(false)
            }, 3000);
        }, 4000)

        return () => {
            clearInterval(intervalid);
        }
    }, [])

    return (
        <StyledContainer>
            <Slide 
                direction={showMessage ? "left" : "right"} in={showMessage} timeout={{ enter: 500, exit: 300 }}
            >
                <Bodytext>
                    {messages[messagesIndex]}
                </Bodytext>
            </Slide>            
        </StyledContainer>
    )
}