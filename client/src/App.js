import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { CartPage } from './pages/Carrito/CartPage';
import { Registro } from './pages/Registro/Registro';
import { RegistroComprador } from './pages/RegistroComprador/RegistroComprador';
import { RegistroVendedor } from './pages/RegistroVendedor/RegistroVendedor';
import { PanelComprador } from './pages/PanelComprador/PanelComprador';
import { PanelVendedor } from './pages/PanelVendedor/PanelVendedor';
import { ProductDetailPage } from './pages/ProductDetail/ProductDetailPage';
import { Contact } from './pages/Contact/Contact';

export function App() {
  return (
    <Router>
      <Routes>     
          <Route exact path="/" element={<HomePage/>} />       
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/CartPage" element={<CartPage/>} />
          <Route path="/Registro" element={<Registro/>} />
          <Route path="/RegistroComprador" element={<RegistroComprador/>} />
          <Route path="/RegistroVendedor" element={<RegistroVendedor/>} />
          <Route path="/PanelComprador" element={<PanelComprador/>} />
          <Route path="/PanelVendedor" element={<PanelVendedor/>} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage/>} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}


