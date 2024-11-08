import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCart } from './CartContext'; 
import { useParams } from 'react-router-dom'; 

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams(); 
    const [items, setItems] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                let productosCollection = collection(db, "productos");

                if (categoryId) {
                    const q = query(productosCollection, where("categoria", "==", categoryId));
                    const productosSnapshot = await getDocs(q);
                    const productosList = productosSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setItems(productosList);
                } else {
                    const productosSnapshot = await getDocs(productosCollection);
                    const productosList = productosSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setItems(productosList);
                }
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        obtenerProductos();
    }, [categoryId]);
    
    return (
        <div>
            <h2>{greeting}</h2>
            {items.length === 0 ? (
                <p>No hay productos disponibles para esta categoría.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <h3>{item.nombre}</h3>
                            <img src={`/images/${item.imagen}`} alt={item.nombre} />
                            <p>${item.precio}</p>
                            <p>Stock: {item.stock}</p>

                            <button onClick={() => addToCart(item)}>Agregar al carrito</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ItemListContainer;