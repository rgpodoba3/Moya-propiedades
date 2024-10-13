import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <div className="navSuperior"></div>
        <nav className="containerNavbar">
            <div className="logo"></div>
            <div className="containerListDesktop"></div>
            <div className="containerButtonMenu"></div>
        </nav>
    </header>
  )
}

export default Navbar