import { RouterProvider, Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect, useReducer, useState } from "react"
import PetParent from './pages/Petparent';
import PetSitter from './pages/Petsitter';
import Mainpage from './pages/Mainpage';
import AppDrawer from './components/Navbar/drawer';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import { GlobalContext } from './components/utils/globalStateContext';
import globalReducer from './components/utils/globalReducer';
import { NavProvider } from './components/Navbar/NavContext';
import Footer from './components/Home/Footer';
import Selection from './components/Perent/Search';
import CartList from './components/Perent/CardList';
import ClickedCard from './components/Perent/ClickedCard';
import Card from './components/Perent/Card';

function App() {

  const initialState = {
    logedInUserName: '',
    tokens: '',
  }




  const [store, dispatch] = useReducer(globalReducer, initialState)

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={{ store, dispatch }}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </ThemeProvider >
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav />} errorElement={<NotFound />}>
      <Route path='/' exact element={<Mainpage />} />
      <Route path='/petparent' exact element={<PetParent />} />
        <Route path='/petparent/search' exact element={<Selection />} />
          <Route path='/petparent/search/sitters' exact element={<ClickedCard />} />
          <Route path='/petparent/search/sitters/:cardId' exact element={<Card />} />
      <Route path='/petsitter' exact element={<PetSitter />} />
    </Route>)
)

function Nav() {
  return (
    <>
      <NavProvider>
        <Navbar />
        <AppDrawer />
        <Outlet />
        <Footer />
      </NavProvider>
    </>
  )
}

export default App;
