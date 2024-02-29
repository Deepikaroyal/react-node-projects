import React from 'react';
//import './App.css';
import About from './About';
import Shop from './Shop';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='nav-link'>
        <Link to='About'>
          <li>About</li>
          </Link>
          <Link to= 'Shop' >
          <li>Shop</li>
          </Link>
      </ul>
      </nav>
  );
}

export default Nav;