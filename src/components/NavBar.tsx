import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPhone, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo from '../assets/redflag.png';

const Navbar: React.FC = memo(() => {
  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <Link to="/" aria-label="Home">
        <img src={logo} alt="" width="30" height="30" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/about" aria-label="About">
          <FontAwesomeIcon icon={faInfoCircle} aria-hidden="true" /> About
        </Link>
        <Link to="/contact" aria-label="Contact">
          <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> Contact
        </Link>
        <Link to="/advice" aria-label="Advice">
          <FontAwesomeIcon icon={faLightbulb} aria-hidden="true" /> Advice
        </Link>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;