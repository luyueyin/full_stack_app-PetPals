import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import theme from '../components/styled/Theme';
import { Outlet } from "react-router-dom";

import { NavProvider } from '../components/Navbar/NavProvider';
import AppDrawer from '../components/drawer'
import Navbar from '../components/Navbar'

import Banner from '../components/Banner';
import Footer from '../components/footer'
import Intro from '../components/SlidingAd';
import ButtonGroup from '../components/ButtonGroup'
import Service from '../components/Service';

const Home = () => {
    useEffect(() => {
        document.title = "Petpals - Home";
    }, []);

    return (
        <Container maxWidth="1800px" sx={{ background: '#daf1f7', }}>
            <NavProvider>
                {/* <Navbar /> */}
                
                <Banner />
                <Intro />
                <ButtonGroup />
                <Service />
                <Footer />
                <Outlet />
            </NavProvider>





        </Container >

    )
}

export default Home