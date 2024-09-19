import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

import logo from "../../assets/logo.jpg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-wrapper">
          <a href="#home" className="navbar-link-logo">
            <img src={logo} className="logo-image" alt="logo" />
          </a>
        </div>

        {/* Hamburger menu icon */}
        <div className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="navbar-toggle-icon"></div>
        </div>

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#sobre-mi" className="navbar-link">Sobre mi</a>
          </li>

          <li className="navbar-item">
            <a href="#proyectos" className="navbar-link">Proyectos</a>
          </li>

          <li className="navbar-item">
            <a href="#experiencia" className="navbar-link">Experiencia</a>
          </li>

          <li className="navbar-item">
            <a href="#contacto" className="navbar-link">Contacto</a>
          </li>

        </ul>
      </div>
    </nav >
  );
};

export default Navbar;