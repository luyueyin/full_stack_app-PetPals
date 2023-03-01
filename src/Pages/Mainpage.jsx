import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import { NavProvider } from '../components/Navbar/NavContext';
import Banner from '../components/Home/Banner';
import Footer from '../components/Home/Footer'
import Intro from '../components/Home/SlidingAd';
import ButtonGroup from '../components/Home/ButtonGroup'
import Service from '../components/Home/Service';

const Mainpage = () => {
    useEffect(() => {
        document.title = "Petpals - Home";
    }, []);

    return (
        <Container maxWidth="1800px">
            <NavProvider>
                <Banner />
                <Intro />
                <ButtonGroup />
                <Service />
            </NavProvider>
        </Container >

    )
}

export default Mainpage