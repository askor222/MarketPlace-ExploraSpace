// Header.js
import './Header.css';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { Icon, Modal } from '@material-ui/core';
import { ShoppingCart, Explore } from '@material-ui/icons';
import { ProductContext } from '../../Context/UserProvider';
import packImage from './img/pack1.jpg';

export const Header = () => {
  const { cartItems, handleIncrement, handleDecrement, handleRemoveItem } = useContext(ProductContext);

  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  
  
  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          <Icon className="logo-icon">
            <Explore />
          </Icon>
          ExploraSpace
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/product/:id">Productos</Link>
          </li>
          <li>
            <Link onClick={handleCartClick}>
              <Icon className="cart-icon">
                <ShoppingCart />
              </Icon>
            </Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

       {/* MODAL CARRITO COMPRA */}
      <Modal open={isCartOpen} onClose={handleCloseCart} className="modal-container">
        <div className="modal-content">
          <span className="modal-close-btn" onClick={handleCloseCart}>
            X
          </span>
          <h3 className="cart-title">Carrito De Compras</h3>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={packImage} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Precio: €{item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <button onClick={() => handleRemoveItem(item)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total: €{calculateTotal()}</p>
            <button className="checkout-button">Realizar Pago</button>
          </div>
        </div>
      </Modal>
    </header>
  );
};