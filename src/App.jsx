import { RouterProvider, Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect, useReducer, useState } from "react"
import PetParent from './Pages/Petparent';
import PetSitter from './Pages/Petsitter';
import Mainpage from './Pages/Mainpage';
import AppDrawer from './components/Navbar/drawer';
import Navbar from './components/Navbar';
import NotFound from './Pages/NotFound';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import { GlobalContext } from './components/utils/globalStateContext';
import globalReducer from './components/utils/globalReducer';
import { NavProvider } from './components/Navbar/NavContext';
import Footer from './components/Home/Footer';
import Selection1 from './components/Perent/Selection1';


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
        <Route path='/petparent/selection/step1' exact element={<Selection1 />} />
        <Route path='/petparent/selection/step2' exact element={<Selection1 />} />
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
