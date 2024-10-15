import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; 
import { useCart } from './CartContext'; 

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        if (categoryId) {
            setItems(products.filter((item) => item.category === categoryId));
        } else {
            setItems(products); 
        }
    }, [categoryId]);

    return (
        <div>
            <h2>{greeting}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {items.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                        <h3>{item.name}</h3>
                        <p>Precio: ${item.price}</p>
                        <p>Stock: {item.stock}</p>
                        <button onClick={() => addToCart(item)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
