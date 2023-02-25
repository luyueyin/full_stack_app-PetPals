import IntroTitle from "./styled/Button"
import Button from '@mui/material/Button';
import {IntroText, IntroButtonContainer, ButtonContainer } from './styled/StyledIntro'


export default function ButtonGroup() {

    return (
        <IntroButtonContainer>
            <IntroText>
                <h1>What would you like to do?</h1>
            </IntroText>
            <ButtonContainer>
                <Button text="Schedule a Service" onClick={() => {
                    alert('clicked');
                }} />
                <Button text="Post Job For Free" onClick={() => {
                    alert('clicked');
                }} />
            </ButtonContainer>
        </IntroButtonContainer>
    )
}