import { BannerContainer } from '../components/styled/Banner';
import AddCard from '../components/Sitter/AddCard';
import Intro from '../components/Sitter/Intro'
import Card from '../components/Sitter/AddCard';
import React, { useEffect } from "react";

const PetSitter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div id='petsitter'>
            <Intro />
            <AddCard />
        </div>
    )
}

export default PetSitter