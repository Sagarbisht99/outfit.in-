import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Calculate total price dynamically based on cart
    const totalPrice = cart.reduce((total, item) => total + item.price * item.amount, 0);
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    // Calculate total number of items dynamically based on cart
    const amount = cart.reduce((acc, curr) => acc + curr.amount, 0);
    setCartAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItems = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItems]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementCart = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id); // This will increase the quantity of the item
    }
  };

  const decrementCart = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incrementCart,
        decrementCart,
        cartAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
