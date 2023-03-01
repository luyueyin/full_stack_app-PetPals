import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import theme from '../components/styled/Theme';
import { NavProvider } from '../components/Navbar/NavContext';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import Intro from '../components/SlidingAd';
import ButtonGroup from '../components/ButtonGroup'
import Service from '../components/Service';

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
                <Footer />
            </NavProvider>
        </Container >

    )
}

export default Mainpage