import React from 'react';
import './Header.css'; // Archivo de estilos CSS para el Header
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { ShoppingCart, Explore } from '@material-ui/icons';

export const Header = () => {
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
            <Link to="/carrito">
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
      
    </header>
  );
};


