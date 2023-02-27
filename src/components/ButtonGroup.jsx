import IntroTitle from "./styled/Button"
import {CustomButton} from './styled/Button';
import {IntroText, IntroButtonContainer, ButtonContainer } from './styled/StyledIntro'


export default function ButtonGroup() {

    return (
        <IntroButtonContainer>
            <IntroText>
                <h1>What would you like to do?</h1>
            </IntroText>
            <ButtonContainer>
                <CustomButton onClick={() => {alert('clicked');}}>Schedule a Service</CustomButton>
                <CustomButton onClick={() => {alert('clicked');}}>Post Job For Free</CustomButton>
            </ButtonContainer>
        </IntroButtonContainer>
    )
}