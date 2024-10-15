import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './navbar.css'; 

function NavBar() {
  return (
    <nav className="navbar"> 
      <div className="logo">
        <h1>Calzados Miren</h1>
      </div>
      <ul className="nav-links"> 
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/alpargata">Alpargatas</Link></li>
        <li><Link to="/category/pantuflas">Pantuflas</Link></li>
      </ul>
      <CartWidget />  
    </nav>
  );
}

export default NavBar;
