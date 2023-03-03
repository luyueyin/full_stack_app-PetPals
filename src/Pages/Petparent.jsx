import { useEffect, useState } from "react"
import FindingSitter from '../components/Perent/FindingSitter';
import StepIntro from '../components/Perent/StepIntro';
import Selection1 from '../components/Perent/Selection';
import CardList from '../components/Perent/CardList';
import ClickedCard from '../components/Perent/ClickedCard';



const PetParent = () => {
    
    const [clickedCard, setClickedCard] = useState(null)
    
    function setClick(card) {
        setClickedCard(card)
    }

    return (
        <>
        <FindingSitter />
        <StepIntro />
        <Selection1 />
        <CardList setClick={setClick} clickedCard={clickedCard}/>
        </>
    )
}

export default PetParent