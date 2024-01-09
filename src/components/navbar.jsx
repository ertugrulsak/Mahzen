import { Link } from 'react-router-dom';
import React from 'react';
import '../Css/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar-component'>
      <ul className='navbar-list'>
        <li className='navbar-element'><Link to="/signup">Signup</Link></li>
        <li className='navbar-element'><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
