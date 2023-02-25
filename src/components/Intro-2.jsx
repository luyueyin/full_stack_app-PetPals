import Button from "./styled/Button"
import { IntroContainer2, IntroText2, ButtonContainer } from './styled/Intro/2'


export default function HomepageOptions() {

    return (
        <IntroContainer2>
            <IntroText2>
                <h3>What would you like to do?</h3>
            </IntroText2>
            <ButtonContainer>
                <Button text="Schedule a Service" onClick={() => console.log('Button clicked!')} />
                <Button text="Post Job For Free"onClick={() => console.log('Button clicked!')} />
            </ButtonContainer>
        </IntroContainer2>
    )
}