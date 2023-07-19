// import React from 'react';
// import './ProductPage.css'
// import { useParams } from 'react-router-dom';
// import { Header } from '../../components/Header/Header';
// import { Footer } from '../../components/Footer/Footer';
// import { Banner } from '../../components/Banner/Banner';
// import { ProductCard } from '../../components/ProductCard/ProductCard';


// export const ProductPage = () => {
//   const { id } = useParams();

//   // Lógica para obtener la información del producto según el ID

//   return (
    
//     <div className="product-page-container">
//       <Header />
//       <Banner />
//       <div className='products'>
      
//         <ProductCard />
//       </div>
//       <Footer />
//     </div>
//   );
// };





import React from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const ProductPage = () => {
  const { id } = useParams();

  // Lógica para obtener la información del producto según el ID

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


