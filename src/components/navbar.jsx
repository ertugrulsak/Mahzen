// Navbar.js

import React from 'react';
import { Navigate } from "react-router-dom";// Eğer sayfalar arası geçiş yapacaksanız React Router kullanabilirsiniz

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
