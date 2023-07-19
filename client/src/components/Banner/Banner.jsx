import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css'

export  function Banner() {
  return (
    <div className="banner-content">
    <h1 className="banner-title">¡Descubre el Universo!</h1>
    <p className="banner-subtitle">Explora nuestra amplia selección de experiencias espaciales</p>
    <Link to="/product/:id" className="banner-button">
      <span>Ver productos</span>
    </Link>
  </div>
  )
}
