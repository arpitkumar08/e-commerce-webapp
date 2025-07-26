import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const Cart = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };
    return (
        <div>
            <CartContext.Provider value={{ cartCount, addToCart }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default Cart;
