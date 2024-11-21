import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
       
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        
    </div>
  )
}

export default Navbar