import PetParent from './Pages/Petparent';
import PetSitter from './Pages/Petsitter';
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


function App() {
  useEffect(() => {
    document.title = "Petpals - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#daf1f7',
        }}
      >
        <Navbar />
        <Banner />
        <Intro />
        <ButtonGroup />
        <Service />

        <Router>
          <Routes>
            <Route path='/' exact />
            <Route path='/petparent' element={<PetParent />} />
            <Route path='/petsitter' element={<PetSitter />}/>
          </Routes>
        </Router>
        
      </Container>
    </ThemeProvider>
  );
}


export default App;
