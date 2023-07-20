import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './PanelVendedor.css';

export function PanelVendedor() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 50, cantidadVendida: 10 },
    { id: 2, nombre: 'Producto 2', precio: 35, cantidadVendida: 5 },
    { id: 3, nombre: 'Producto 3', precio: 70, cantidadVendida: 8 },
  ]);

  // Estado para controlar si el modal está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false);

  const handleAgregarProducto = () => {
    // Aquí iría la lógica para agregar un nuevo producto
    // Por ahora, simplemente cambiamos el estado del modal
    setModalOpen(true);
  };

  return (
    <div className="panel-vendedor-container">
      <Header />
      <div className="panel-vendedor-content">
        <h2 className="panel-vendedor-title">Panel de Vendedor</h2>
        <div className="panel-vendedor-buttons">
          <button className="panel-vendedor-add-button" onClick={handleAgregarProducto}>
            Agregar Nuevo Producto
          </button>
          {/* Aquí irían otros botones o funcionalidades para el panel de vendedor */}
        </div>
        <div className="panel-vendedor-section">
          <h3 className="panel-vendedor-section-title">Tus Productos</h3>
          <ul className="panel-vendedor-productos-list">
            {productos.map((producto) => (
              <li key={producto.id} className="panel-vendedor-producto">
                <p>{producto.nombre}</p>
                <p>Precio: {producto.precio}€</p>
                <p>Cantidad Vendida: {producto.cantidadVendida}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel-vendedor-section">
          <h3 className="panel-vendedor-section-title">Ventas Realizadas</h3>
          <ul className="panel-vendedor-ventas-list">
            {/* Aquí irían datos ficticios de ventas realizadas */}
            <li className="panel-vendedor-venta">
              <p>Fecha: 12/08/2023</p>
              <p>Producto: Producto 1</p>
              <p>Precio: 50€</p>
            </li>
            <li className="panel-vendedor-venta">
              <p>Fecha: 15/08/2023</p>
              <p>Producto: Producto 3</p>
              <p>Precio: 70€</p>
            </li>
          </ul>
        </div>
        {/* Otras secciones relevantes para el perfil del vendedor */}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Agregar Nuevo Producto</h2>
            <form className="modal-form">
              <input type="text" placeholder="Nombre del Producto" />
              <input type="text" placeholder="Descripción" />
              <input type="number" placeholder="Precio" />
              <input type="file" accept="image/*" />
              <button className="modal-button">Guardar Producto</button>
              <button className="modal-button" onClick={() => setModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
