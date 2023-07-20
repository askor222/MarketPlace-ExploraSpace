import React from 'react';
import './ProductPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const ProductPage = () => {
  



  return (
    <div className="product-page-container">
      <Header />
      <Banner />
      <div className="product-section">
        <h2 className="product-section-title">Nuestras experiencias más... espaciales</h2>
        <div className="products">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};


