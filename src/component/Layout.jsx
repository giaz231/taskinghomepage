import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
    <header><Navbar/></header>
<div className='px-5 py-10 w-full'> 
    {children}
 
</div>
<Footer/>
</div>
  )
}

export default Layout