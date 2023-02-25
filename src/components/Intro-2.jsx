import Button from "./styled/Button"
import {IntroText, IntroButtonContainer, ButtonContainer } from './styled/StyledIntro'


export default function HomepageOptions() {

    return (
        <IntroButtonContainer>
            <IntroText>
                <h3>What would you like to do?</h3>
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