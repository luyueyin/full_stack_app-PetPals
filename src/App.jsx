import { RouterProvider, Route, Outlet, useNavigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect, useReducer, useState } from "react"
import PetParent from './Pages/Petparent';
import PetSitter from './Pages/Petsitter';
import Home from './Pages/Home';
import AppDrawer from './components/drawer';
import Navbar from './components/Navbar';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styled/Theme';
import { GlobalContext } from './components/utils/globalStateContext';
import globalReducer from './components/utils/globalReducer';


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
        {/* <Routes>
            <Route path='/petparent' exact element={<PetParent />}></Route>
            <Route path='/petsitter' exact element={<PetSitter />}></Route>
          </Routes> */}

      </ThemeProvider >
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route path='/' exact element={<Home />} />
      <Route path='/petparent' exact element={<PetParent />} />
      <Route path='/petsitter' exact element={<PetSitter />} />
    </Route>)
)

function MainPage() {
  return (
    <>
      <Navbar /> 
      <Outlet />
    </>
  )
}


export default App;
