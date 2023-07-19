import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const getProduct = createContext()

export function UserProvider({children}) {
  const [data, setData] = useState([]);




  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res)=>setData(res.data))
  }, [])

  return (
    <getProduct.Provider value={{data}}>{children}</getProduct.Provider> 

)
}
