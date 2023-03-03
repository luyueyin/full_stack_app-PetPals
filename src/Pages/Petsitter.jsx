import { BannerContainer } from '../components/styled/Banner';
import AddCard from '../components/Sitter/AddCard';

const PetSitter = () => {
    return (
        <div id='petsitter'>
            <BannerContainer id='addCard'>
                <h3>Pet Sitter</h3>
                <div>
                    <AddCard />
                </div>
            </BannerContainer>
        </div>
    )
}

export default PetSitter