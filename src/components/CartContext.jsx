import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    function addToCart(product) {
        setCart((prevCart) => {
            const itemInCart = prevCart.find((item) => item.id === product.id);
            if (itemInCart) {
                if (itemInCart.quantity < product.stock) {
                    const updatedCart = prevCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    return updatedCart;
                } else {
                    return prevCart;
                }
            } else {
                if (product.stock > 0) {
                    const newCart = [...prevCart, { ...product, quantity: 1 }];
                    return newCart;
                } else {
                    return prevCart;
                }
            }
        });
    }

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
