import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart, removeFromCart } = useCart();
    return (
        <div>
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;