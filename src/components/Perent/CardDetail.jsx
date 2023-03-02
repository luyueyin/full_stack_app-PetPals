import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer, CardBox } from '../styled/StyledContainer';
import Button from '@mui/material/Button';
import { Paper, Container, Grid, Stack, styled } from '@mui/material';



export default function CardDetail() {
    
    const handleBack = () => {
        <Button href="/petparent/selection/sitters">Link</Button>
    };
    
    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>
                    <Button color="inherit" href="/petparent/selection/sitters" sx={{ mt: 8 }}>Back</Button>

                    
                <ContentContainer>

                </ContentContainer>
            </Container>
        </BannerContainer>
    )
}
