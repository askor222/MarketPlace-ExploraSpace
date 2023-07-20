import React from 'react';
import './ProductDetailPage.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Typography from '@mui/material/Typography';


export const ProductDetailPage = () => {
    const { id } = useParams();



    return (
        <div className="product-page-container">
            <Header />

            <div className="product-detail-wrap">

                <div className="content-img">
                    <img className="img-embed" src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                </div>

                <div className="content-description">
                    <h2 className="product-section-title --detail-page">Paquete básico</h2>
                    <Typography variant="body2" color="text.secondary" fontSize="1.2rem" >
                        <p>¡Bienvenido al emocionante mundo de la simulación espacial! Nuestro pack básico de experiencia de simulación espacial te llevará en un viaje inolvidable a través de los vastos confines del universo. Prepárate para explorar las maravillas del cosmos desde la comodidad de tu asiento.
                            Características del Pack Básico de Experiencia de Simulación Espacial:</p>
                        <ol className='lists'>
                            <li className='lists'>Viaje Interplanetario: Embárcate en una emocionante travesía por nuestro sistema solar. Visitarás planetas, lunas y asteroides, contemplando paisajes únicos y sorprendentes.</li>
                            <li className='lists'>Naves Espaciales Realistas: Experimenta la adrenalina de pilotar naves espaciales realistas, desde pequeñas sondas hasta enormes naves interplanetarias. Siente la emoción de maniobrar en el espacio, evitando asteroides y sorteando campos gravitatorios.</li>
                            <li className='lists'>Exploración de Estrellas: Eleva tu perspectiva y dirige tu mirada hacia las estrellas. Observa cúmulos de estrellas, nebulosas y otras maravillas celestiales mientras te adentras en las profundidades del universo.</li>
                        </ol>
                    </Typography>
                    <div className="content-button">
                        <button className='header-button --btnmod'>Añadir al carrito</button>
                        <Link to="/Contact">
                        <button className='header-button --btnmod'>Contacta con nosotros</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

