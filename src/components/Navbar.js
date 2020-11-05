import React, {useState} from 'react'
import {Link, Router} from 'react-router-dom'

function navbar() {
return ( <>
  <nav className="navbar">
    <div className="navbar-container">
      <Router>
          <Link to="/" className="navbar-logo">
          </Link>
      </Router>
    </div>
  </nav>
    </>)
}

export default navbar
