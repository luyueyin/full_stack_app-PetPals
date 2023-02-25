import CustomButton from "./styled/Button"
import {IntroText, IntroButtonContainer, ButtonContainer } from './styled/StyledIntro'


export default function HomepageOptions() {

    return (
        <IntroButtonContainer>
            <IntroText>
                <h1>What would you like to do?</h1>
            </IntroText>
            <ButtonContainer>
                <CustomButton text="Schedule a Service" onClick={() => {
                    alert('clicked');
                }} />
                <CustomButton text="Post Job For Free" onClick={() => {
                    alert('clicked');
                }} />
            </ButtonContainer>
        </IntroButtonContainer>
    )
}