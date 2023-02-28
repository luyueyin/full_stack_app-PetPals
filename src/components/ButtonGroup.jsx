import CustomizedButtons from "./styled/Button"
import StyledButton from './styled/Button';
import { IntroButtonContainer, ButtonContainer } from './styled/StyledContainer'
import Stack from '@mui/material/Stack';
import { Bodytext } from './styled/Font';

export default function ButtonGroup() {

    return (
        <IntroButtonContainer>
            <Bodytext>
                <h1>What would you like to do?</h1>
            </Bodytext>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, sm: 4, md: 8}}
                marginTop={'40px'}
                alignItems={'center'}
                display={'flex'}
                adjustPosition={'center'}
            >
                <CustomizedButtons text={'Schedule a Service'} onClick={() => {alert('clicked');}}></CustomizedButtons>
                <CustomizedButtons text={'Post Job For Free'} onClick={() => {alert('clicked');}} />
            </Stack>
        </IntroButtonContainer>
    )
}