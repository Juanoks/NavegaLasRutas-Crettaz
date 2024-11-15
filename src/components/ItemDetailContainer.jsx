import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from './CartContext';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const docRef = doc(db, "productos", itemId);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    setItem({ id: docSnapshot.id, ...docSnapshot.data() });
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchItem();
    }, [itemId]);

    const handleAddToCart = (quantity) => {
      if (item && quantity > 0) {
          addToCart({ ...item, quantity });
      }
  };
    return (
        <div>
            {item ? (
                <>
                    <h3>{item.nombre}</h3>
                    <img src={`/images/${item.imagen}`} alt={item.nombre} />
                    <p>${item.precio}</p>
                    <p>Descripción: {item.descripcion}</p>
                    <p>Stock: {item.stock}</p>

                    <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
                </>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
