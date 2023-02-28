import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetParent from './Pages/Petparent';
import PetSitter from './Pages/Petsitter';
import Home from './Pages/Home';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';

function App() {


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/petparent' exact element={<PetParent />}></Route>
            <Route path='/petsitter' exact element={<PetSitter />}></Route>
            {/* <Route from='/' exact render={props => <Home {...props} />} />
            <Route exact path='/petparent' render={props => <PetParent {...props} />} />
            <Route exact path='/petsitter' render={props => <PetSitter {...props} />} /> */}
          </Routes>
        </Router>
      </ThemeProvider >
    </div>
  );
}


export default App;
