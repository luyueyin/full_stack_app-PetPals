import PetParent from './Pages/Petparent';
import PetSitter from './Pages/Petsitter';
import Home from './Pages/Home';
import { useEffect } from 'react';

import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import Banner from './components/Banner';
import Intro from './components/SlidingAd';
import ButtonGroup from './components/ButtonGroup'
import Service from './components/Service';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Switch } from '@mui/material';
import Footer from './components/footer'
import AppDrawer from './components/drawer'
import { NavProvider } from './components/Navbar/NavProvider';



function App() {
  // useEffect(() => {
  //   document.title = "Petpals - Home";
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#daf1f7',
        }}
      >
        <NavProvider>
          <AppDrawer />
          <Navbar />
          <Banner />
        </NavProvider>

        {/* 
        <Intro />
        <ButtonGroup />
        <Service /> */}

        {/* <Router>
          <Switch>
            <Route exact from='/' render={props => <Home {...props} />} />
            <Route exact path='/petparent' render={props => <PetParent {...props} />} />
            <Route exact path='/petsitter' render={props => <PetSitter {...props} />} />
          </Switch>
        </Router> */}

        {/* <Footer /> */}

      </Container>
    </ThemeProvider>
  );
}


export default App;
