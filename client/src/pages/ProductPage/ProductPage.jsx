import { useState, useEffect } from 'react';
import './ProductPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductFilter } from '../../components/ProductFilter/ProductFilter';


export const ProductPage = () => {
  const [filter, setFilter] = useState('Todos'); // Estado para el filtro, "todos' es la opción predeterminada

  // Efecto para cargar todos los productos al iniciar la página
  useEffect(() => {
    setFilter('Todos');
  }, []);
  return (
    <div className="product-page-container">
      <Header />
      <Banner />
      <div className="product-section">
        <h2 className="product-section-title">Nuestras experiencias más... espaciales</h2>
        <div className="centered-filter">
          <ProductFilter onChangeFilter={(selectedFilter) => setFilter(selectedFilter)} />
        </div>
        <div className="products">
          <ProductCard filter={filter} />
        </div>
      </div>
      <Footer />
    </div>
  );
};


