import { useState, useEffect } from "react";
import { db } from "../data/db";

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart());
  const MAX_ITEM = 5;
  const MIN_ITEM = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    let itemExist = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0) {
      if (cart[itemExist].quantity === MAX_ITEM) return;
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart((prevCart) => [...prevCart, item]);
    }
  }

  function increaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEM) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updateCart);
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity >= MIN_ITEM) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updateCart);
  }

  function removeFromCart(id) {
    console.log("removeeee ", id);
    // cuando tengo parametros en la function, cuando la llamo tengo que pasarla en un callback de arroy
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
    console.log("cart: ", cart);
  }
  function cleanCart() {
    setCart([]);
  }

  const isEmpty = () => cart.length === 0;
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return {
    data,
    cart,
    initialCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal,
  };
};
