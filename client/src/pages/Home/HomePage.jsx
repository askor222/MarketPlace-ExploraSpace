import React from 'react';
import './HomePage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { Explore, Info, Star } from '@material-ui/icons';
import Foto from './img/espaciobg4.jpg';

export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <div className="header-content">
            <h1 className="header-title">¡Descubre el Universo!</h1>
            <p className="header-subtitle">¿Alguna vez te has preguntado cómo se siente volar al espacio? Descúbrelo con nuestras simulaciones</p>
            <Link to="/product/:id" className="header-button">
              <span>Ver productos</span>
            </Link>
          </div>
        <section className="hero-section">       
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">¡Descubre el Universo con <span>ExploraSpace!</span></h1>
              <p className="hero-subtitle">
                En ExploraSpace, te llevamos a un viaje fascinante a través de las maravillas del espacio.
                Explora y adquiere productos espaciales únicos que te transportarán a las estrellas.
              </p>
              <Link to='/Contact'  className="hero-button">
                Contactar
              </Link>
            </div>

            <div className="hero-right">
              <img src={Foto} alt="" />
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature">
            <Icon className="feature-icon">
              <Explore />
            </Icon>
            <h2 className="feature-title">Exploración espacial</h2>
            <p className="feature-description">
              Sumérgete en la aventura de la exploración espacial con productos inspirados en las misiones espaciales más
              icónicas y descubre los secretos del universo.
            </p>
          </div>
          <div className="feature">
            <Icon className="feature-icon">
              <Info />
            </Icon>
            <h2 className="feature-title">Información fascinante</h2>
            <p className="feature-description">
              Aprende datos interesantes y fascinantes sobre el espacio, los planetas, las estrellas y los fenómenos
              celestiales con nuestros recursos y contenido educativo.
            </p>
          </div>
          <div className="feature">
            <Icon className="feature-icon">
              <Star />
            </Icon>
            <h2 className="feature-title">Calidad excepcional</h2>
            <p className="feature-description">
              Nos enorgullece ofrecer productos de la más alta calidad, seleccionados cuidadosamente para garantizar una
              experiencia única y satisfactoria.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
