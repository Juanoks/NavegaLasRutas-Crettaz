import React, { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (stock > 0) {
            onAdd(count); 
        } else {
            alert("Producto sin stock disponible");
        }
    };

    return (
        <div>
            <button onClick={handleDecrement} disabled={count === 1}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count === stock}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
