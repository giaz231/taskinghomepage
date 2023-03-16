import React from 'react'
import Usee from '../assets/usee.png'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

const navi = useNavigate()

  return (
<div className="navbar bg-usee-blue">
  <div className="navbar-start">
  <div className="flex">
  <img src={Usee} alt="" width='75px' />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li onClick={()=>navi('/')}><a className='text-white hover:bg-sky-700' >Home</a></li>
      <li onClick={()=>navi('/Favorites')}><a className='text-white hover:bg-sky-700' >Favorites</a></li>
    </ul>
  </div>
  </div>

  <div className="navbar-end">
   
  </div>
</div>
  )
}

export default Navbar