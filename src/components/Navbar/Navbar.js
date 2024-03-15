import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="Navbar">
      
      <div className="navlist">
         <img id='logo'src={require('../../Assets/Shoppinglogo.jpg')} alt="logo" />
        <div className="subnavlist">
        <div className='nav-item'>
            <Link to='/' className='nav-links'>
              Dashboard
            </Link>
          </div>
        <div className='nav-item'>
      
            <Link to='/productdetails' className='nav-links' >
              Products Management
            </Link>
          </div>

          <div className='nav-item'>
            <Link to='/orders' className='nav-links' >
             Orders Management
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
