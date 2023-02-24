import './App.css';
import { useEffect } from 'react';
// import Home from './Home/HomePage'
import Navbar from './components'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '@mui/material/Button';
import Title from './styled/Title';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styled/Theme';


function App() {
  useEffect(() => {
    document.title = "Petpals - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: 'lightblue'
        }}
      >
        <Navbar />
        {/* 
      <Router>
        
        <Routes>
          <Route path='/' exact />
        </Routes>
        <Buttons />
      </Router> */}
        <h1>This is a title!</h1>
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}


export default App;
