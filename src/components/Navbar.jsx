import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/prime__2_-removebg-preview.png'
const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center py-5 px-5'>
      <div>
        <img src={logo} alt="" className='w-[200px]' />
      </div>
      <div className='space-x-7 '>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">
      <button className="px-6 py-3 backdrop-blur-md bg-white/10   text-white rounded-xl shadow-md hover:bg-white/20 transition-all duration-300">
        Contact Us
      </button>
    </Link>
        
      </div>
    </div>
  )
}

export default Navbar
