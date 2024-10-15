import React from 'react';
import { Link } from 'react-router-dom'; 

function CartWidget() {
  return (
    <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>  
      <div>
        🛒 Carrito
      </div>
    </Link>
  );
}

export default CartWidget;