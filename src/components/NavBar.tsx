import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPhone, faLightbulb, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo from '../assets/redflag.png';

const Navbar: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <div className="nav-top">
        <Link to="/" aria-label="Home">
          <img src={logo} alt="" width="30" height="30" className="logo" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/about" aria-label="About" onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faInfoCircle} aria-hidden="true" /> About
        </Link>
        <Link to="/contact" aria-label="Contact" onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> Contact
        </Link>
        <Link to="/advice" aria-label="Advice" onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faLightbulb} aria-hidden="true" /> Advice
        </Link>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;