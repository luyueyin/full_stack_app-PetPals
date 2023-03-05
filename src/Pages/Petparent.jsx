import FindingSitter from '../components/Perent/FindingSitter';
import StepIntro from '../components/Perent/StepIntro';
import React, { useEffect } from "react";

const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="petparent">
            <StepIntro />
            <FindingSitter />
        </div>
    )
}

export default PetParent