import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: itemId, name: 'Producto', price: 99 });
      }, 2000);
    });

    fetchItem.then((data) => setItem(data));
  }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>Precio: ${item.price}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
