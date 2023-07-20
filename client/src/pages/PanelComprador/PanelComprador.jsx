import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './PanelComprador.css';

export function PanelComprador() {
  // Datos ficticios de compras y productos favoritos para mostrar en el panel
  const [compras, setCompras] = useState([
    { id: 1, producto: 'Producto 1', precio: 50, fecha: '12/08/2023' },
    { id: 2, producto: 'Producto 3', precio: 70, fecha: '15/08/2023' },
  ]);

  const [favoritos, setFavoritos] = useState([
    { id: 1, producto: 'Producto 2', precio: 35 },
    { id: 2, producto: 'Producto 4', precio: 90 },
  ]);

  return (
    <div className="panel-comprador-container">
      <Header />
      <div className="panel-comprador-content">
        <h2 className="panel-comprador-title">Panel de Comprador</h2>
        <div className="panel-comprador-section">
          <h3 className="panel-comprador-section-title">Tus Compras</h3>
          <ul className="panel-comprador-compras-list">
            {compras.map((compra) => (
              <li key={compra.id} className="panel-comprador-compra">
                <p>Fecha: {compra.fecha}</p>
                <p>Producto: {compra.producto}</p>
                <p>Precio: {compra.precio}€</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel-comprador-section">
          <h3 className="panel-comprador-section-title">Productos Favoritos</h3>
          <ul className="panel-comprador-recomendaciones-list">
            {favoritos.map((favorito) => (
              <li key={favorito.id} className="panel-comprador-recomendacion">
                <p>Producto: {favorito.producto}</p>
                <p>Precio: {favorito.precio}€</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Otras secciones relevantes para el perfil del comprador */}
      </div>
      <Footer />
    </div>
  );
}
