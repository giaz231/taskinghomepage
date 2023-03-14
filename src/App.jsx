import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './Home';
import DetailHomepage from './pages/DetailHomepage'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/DetailHomePage' element={<DetailHomepage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App