import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import useePolos from '../assets/useePolos.png'

const Layout = ({children}) => {
   
  return (
    <div  className="w-full bg-no-repeat bg-center h-screen overflow-x-hidden absolute" style={{ backgroundImage: `url(${useePolos})`}}>
    <header><Navbar/></header>
<div className='px-5 py-10 w-full'> 
    {children}
 
</div>
<Footer/>
</div>
  )
}

export default Layout