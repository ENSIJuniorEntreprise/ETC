
import React, { useState } from 'react';
import './Navbar1.css';

function Navbar1() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='nav'>
      <img src="navbar.png" alt="navbar" className='img'/>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li>
          <a href="#" className='nav-link accueil' onClick={toggleMenu}>Accueil</a>
        </li>
        <li>
          <a href="#" className='nav-link apropos' onClick={toggleMenu}>A propos</a>
        </li>
        <li>
          <a href="/Service" className='nav-link service' onClick={toggleMenu}>Services</a>
        </li>
        <li>
          <a href="#" className='nav-link actualité' onClick={toggleMenu}>Actualités</a>
        </li>
        <li>
          <a href="#" className='nav-link contact' onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
       
      </div>
    </nav>
  );
}

export default Navbar1;


