// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Skill-Trade</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/course">Cursos</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Registro</Link>
      </div>
    </nav>
  );
}

export default Navbar;
