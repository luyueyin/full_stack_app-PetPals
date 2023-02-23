import './App.css';
import Navbar from './components/Navbar'
// import Home from './Home/HomePage'
// import AppBar from './AppBar/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Buttons from './components/Button';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />  
        <Routes>
          <Route path='/' exact />
        </Routes>
        <Buttons />
      </Router>
    </div>
  );
}

export default App;
