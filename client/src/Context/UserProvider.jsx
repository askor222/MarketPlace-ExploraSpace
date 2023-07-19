



// UserProvider.js
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const getProduct = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const cartLS = JSON.parse(localStorage.getItem('cartItems'))??[]
  const [cartItems, setCartItems] = useState(cartLS);




  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => setData(res.data));
  }, []);



  // LOCAL STORAGE
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  

  // AÑADIR PRODUCTO
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
// SUMAR +1 PRODUCTO
  const handleIncrement = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };
// RESTAR -1 PRODUCTO
  const handleDecrement = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedItems);
  };
// ELIMINAR PRODUCTO
  const handleRemoveItem = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  return (
    <getProduct.Provider value={{ data, handleAddToCart, handleIncrement, handleDecrement, handleRemoveItem, cartItems }}>
      {children}
    </getProduct.Provider>
  );
}
