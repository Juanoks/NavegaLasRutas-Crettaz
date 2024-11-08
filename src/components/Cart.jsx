import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.nombre} - ${item.precio} x {item.cantidad} 
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}


export default Cart;
