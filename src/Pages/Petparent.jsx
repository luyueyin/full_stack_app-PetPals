import FindingSitter from '../components/Perent/FindingSitter';
import StepIntro from '../components/Perent/StepIntro';
import CardList from '../components/Perent/CardList';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from "react";

const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="petparent">
            <StepIntro />
            <FindingSitter />
            {/* <Search />
            <CardList /> */}
            <Outlet />
        </div>
    )
}

export default PetParent