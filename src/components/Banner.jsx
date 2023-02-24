import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "./styled/Banner"

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="./images/Cat-banner.png" />
            <BannerContent>
                <BannerTitle>Welcome to PetPals</BannerTitle>
                <BannerDescription>
                    Drop-In Visits
                    Come to your home and take care of your pet while you're away. They will play with your pets, offer food and water, give potty breaks or clean the litter box, and provide any other necessary care.
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
} 