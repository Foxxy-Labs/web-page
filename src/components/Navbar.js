import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import logo from './logo.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Foxxy Labs logo" width="10%" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
                </Link>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
