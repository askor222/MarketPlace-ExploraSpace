import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import './Registro.css';

export function Registro() {
  const navigate = useNavigate();
  const [registroType, setRegistroType] = useState('');

  const handleRegistro = () => {
    if (registroType === 'comprador') {
      navigate('/RegistroComprador');
    } else if (registroType === 'vendedor') {
      navigate('/RegistroVendedor');
    }
  };

  return (
    <div className="registro-container">
      <Header />
      <Banner />
      <div className="registro-content">
        <div className="main-formulario">
          <h2>Registro</h2>
          <p>Elige si deseas registrarte como comprador o vendedor:</p>
          <div className="opciones-registro">
            <div className="opcion">
              <input
                type="radio"
                id="comprador"
                name="registro"
                value="comprador"
                checked={registroType === 'comprador'}
                onChange={() => setRegistroType('comprador')}
              />
              <label htmlFor="comprador">Comprador</label>
            </div>
            <div className="opcion">
              <input
                type="radio"
                id="vendedor"
                name="registro"
                value="vendedor"
                checked={registroType === 'vendedor'}
                onChange={() => setRegistroType('vendedor')}
              />
              <label htmlFor="vendedor">Vendedor</label>
            </div>
          </div>
          <button className="registro-button" onClick={handleRegistro}>
            Registrarse
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
