import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button';
import logo from './favicon.ico'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/web-page" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Foxxy Labs logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/web-page' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
              <Link to='/web-page/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
                </Link>
            </li>
            <li className='nav-item'>
              <Link to='/web-page/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
                </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
