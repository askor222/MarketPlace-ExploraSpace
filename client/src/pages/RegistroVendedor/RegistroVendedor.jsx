import React from 'react';
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './RegistroVendedor.css';

export function RegistroVendedor() {
  return (
    <div className="registro-vendedor-container">
      <Header />
      <Banner />
      <div className="registro-vendedor-content">
        <h2 className="registro-vendedor-title">Registro como Vendedor</h2>
        <form className="registro-vendedor-form">
          <input type="text" placeholder="Nombre de empresa" className="registro-vendedor-input" />
          <input type="email" placeholder="Correo electrónico" className="registro-vendedor-input" />
          <input type="password" placeholder="Contraseña" className="registro-vendedor-input" />
          <Link to="/PanelVendedor" >
          <button className="registro-vendedor-button">Registrarse</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}
