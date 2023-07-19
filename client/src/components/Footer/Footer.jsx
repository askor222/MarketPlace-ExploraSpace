import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="/terminos">Términos y condiciones</a></li>
          <li><a href="/privacidad">Política de privacidad</a></li>
          <li><a href="/ayuda">Ayuda</a></li>
        </ul>
      </div>
      <div className="footer-copy">
        <p>&copy; 2023 Gadgets Espaciales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
