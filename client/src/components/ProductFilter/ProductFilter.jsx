// En el archivo ProductFilter.js
import React from "react";
import './ProductFilter.css'

export const ProductFilter = ({ onChangeFilter }) => {
  const filters = ['Todos', 'Básico', 'Estándar', 'Avanzado', 'Premium'];

  return (
    <div className="product-filter-container">
      {/* Mostrar botones para las opciones del filtro */}
      {filters.map((filter) => (
        <button
          key={filter}
          className="product-filter-button"
          onClick={() => onChangeFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
