import React, { useState } from 'react';

function ItemCount({ stock, onAdd, initial = 1, max }) {
    const [quantity, setQuantity] = useState(initial);

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(quantity);
    };

    return (
        <div>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
            <div>
                <button onClick={handleAddToCart} disabled={quantity > stock}>Agregar al carrito</button>
            </div>
            {quantity > stock && <p>No hay suficiente stock</p>}
        </div>
    );
}

export default ItemCount;
