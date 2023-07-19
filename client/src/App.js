import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CartPage } from './pages/Carrito/CartPage';

export function App() {
  return (
    <Router>
      <Routes>     
          <Route exact path="/" element={<HomePage/>} />       
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/CartPage" element={<CartPage/>} />      
      </Routes>
    </Router>
  );
}


