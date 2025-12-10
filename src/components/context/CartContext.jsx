import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const increseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

// Favourite Items


    const [favouriteItems, setFavouriteItems] = useState(() => {
        const savedFavourite = localStorage.getItem("FavouriteItems");
        return savedFavourite ? JSON.parse(savedFavourite) : [];
    });

    const addtoFavourite = (item) => {
        setFavouriteItems((prevItems) => {
            if (prevItems.some((favItem) => favItem.id === item.id)) {
                // Item already exists in the favorites list
                return prevItems;
            } else {
                // Add the new item to the favorites list
                return [...prevItems, item];
            }
        });
    };

    const removefromFavourite = (id) => {
        setFavouriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };


    useEffect(() => {
        localStorage.setItem("FavouriteItems", JSON.stringify(favouriteItems));
    } , [favouriteItems]);
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increseQuantity,
                decreseQuantity,
                removeFromCart,
                addtoFavourite,
                favouriteItems,
                removefromFavourite,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
