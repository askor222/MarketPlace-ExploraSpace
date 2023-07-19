import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const getProduct = createContext()

export function UserProvider({children}) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);



  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.productId === product.productId);
  
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };
  


  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res)=>setData(res.data))
  }, [])

  return (
    <getProduct.Provider value={{data, handleAddToCart, cartItems }}>{children}</getProduct.Provider> 

)
}
