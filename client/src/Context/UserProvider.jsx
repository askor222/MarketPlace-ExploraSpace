



// UserProvider.js
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const ProductContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const cartLS = JSON.parse(localStorage.getItem('cartItems')) ?? []
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
  const existingItem = cartItems.find((item) => item._id === product._id);

  if (existingItem) {
    // Si el producto ya existe en el carrito, se actualiza la cantidad
    const updatedItems = cartItems.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  } else {
    // Si el producto no existe en el carrito, se añade como un nuevo elemento
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  }
};



  /// SUMAR +1 PRODUCTO
const handleIncrement = (item) => {
  const updatedItems = cartItems.map((cartItem) =>
    cartItem._id === item._id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
  setCartItems(updatedItems);
};

// RESTAR -1 PRODUCTO
const handleDecrement = (item) => {
  const updatedItems = cartItems.map((cartItem) => {
    if (cartItem._id === item._id) {
      const newQuantity = cartItem.quantity - 1;
      return { ...cartItem, quantity: newQuantity >= 1 ? newQuantity : 1 };
    }
    return cartItem;
  });
  setCartItems(updatedItems);
};

  // ELIMINAR PRODUCTO
  const handleRemoveItem = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
    setCartItems(updatedItems);
  };


  return (
    <ProductContext.Provider
      value={{
        data,
        handleAddToCart,
        handleIncrement,
        handleDecrement,
        handleRemoveItem,
        cartItems
      }}
    >
      {children}
    </ProductContext.Provider>
  );

}