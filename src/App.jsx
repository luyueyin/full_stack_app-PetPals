import { useEffect } from 'react';
// import Home from './Home/HomePage'
import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import Banner from './components/Banner';
import Intro from './components/Intro-1';
import HomepageOptions from './components/Intro-2'

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
        <HomepageOptions />
        {/* 
      <Router>
        
        <Routes>
          <Route path='/' exact />
        </Routes>
        <Buttons />
      </Router> */}
      </Container>
    </ThemeProvider>
  );
}


export default App;
