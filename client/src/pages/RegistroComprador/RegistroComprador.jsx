import React from 'react';
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './RegistroComprador.css';

export function RegistroComprador() {
  return (
    <div className="registro-comprador-container">
      <Header />
      <Banner />
      <div className="registro-comprador-content">
        <h2 className="registro-comprador-title">Registro como Comprador</h2>
        <form className="registro-comprador-form">
          <input type="text" placeholder="Nombre" className="registro-comprador-input" />
          <input type="email" placeholder="Correo electrónico" className="registro-comprador-input" />
          <input type="password" placeholder="Contraseña" className="registro-comprador-input" />
          <Link to="/PanelComprador">
          <button className="registro-comprador-button">Registrarse</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}
