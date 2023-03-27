import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import Favorites from './pages/Favorites';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App