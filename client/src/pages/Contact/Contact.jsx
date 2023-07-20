// import React from 'react';
// import './Contact.css';
// import { Header } from '../../components/Header/Header';
// import { Footer } from '../../components/Footer/Footer';
// import { Banner } from '../../components/Banner/Banner';

// export const Contact = () => {

//     const handleFormSubmit = (event) => {
//         event.preventDefault(); 

//         // Alerta cuando el formulario se envía
//         alert("El formulario ha sido enviado correctamente");
//     };

//     return (
//         <div className="Contact-page-container">
//             <Header />
//             <Banner />
//             <div className="contact-conteiner">
//                 <div className="contact-title">
//                     <h2>Contacto</h2>
//                 </div>
//                 <div className="contact-formulario">

//                     <form onSubmit={handleFormSubmit} className="formulario" id="formulario">

//                         <div className="formulario__grupo">
//                             <label htmlFor="nombre" className="formulario__label">Nombre</label>
//                             <div className="formulario__grupo-input">
//                                 <input type="text" className="formulario__input" name="nombre" id="nombre"
//                                     placeholder="John Doe" required />
//                             </div>
//                         </div>

//                         <div className="formulario__grupo" id="grupo__apellido">
//                             <label htmlFor="apellido" className="formulario__label">Apellido</label>

//                             <div className="formulario__grupo-input">
//                                 <input type="text" className="formulario__input" name="apellido" id="apellido"
//                                     placeholder="López Ruiz" required />
//                             </div>
//                         </div>

//                         <div className="formulario__grupo" id="grupo__telefono">
//                             <label htmlFor="telefono" className="formulario__label">Tfno. Contacto</label>

//                             <div className="formulario__grupo-input">
//                                 <input type="tel" className="formulario__input" name="telefono" id="telefono"
//                                     placeholder="654 987 432" required />
//                             </div>
//                         </div>

//                         <div className="formulario__grupo" id="grupo__correo">
//                             <label htmlFor="correo" className="formulario__label">Email</label>

//                             <div className="formulario__grupo-input">
//                                 <input type="email" className="formulario__input" name="correo" id="correo"
//                                     placeholder="correo@correo.com" required />
//                             </div>
//                         </div>

//                         <div className="formulario__grupo" id="grupo__comentario">
//                             <label htmlFor="comentario" className="formulario__label">Comentario</label>
//                             <div className="formulario__grupo-input">
//                                 <textarea className="formulario__input" id="comentario" name="comentario"
//                                     placeholder="¿Tienes alguna duda? Te ayudamos" required></textarea>
//                             </div>
//                         </div>

//                         <div className="formulario__grupo" id="grupo__terminos">
//                             <label className="formulario__label">
//                                 <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
//                                 Acepto los Términos y Condiciones
//                             </label>
//                         </div>

//                         <div className="formulario__grupo formulario__grupo-btn-enviar">
//                             <button type="submit" className="formulario__btn">Enviar</button>
//                         </div>
//                     </form>

//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };



import React from 'react';
import './Contact.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';
import swal from 'sweetalert';

export const Contact = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Alerta cuando el formulario se envía
        swal("¡Formulario enviado!", "Nos pondremos en contacto contigo lo antes posible.", "success");
    };

    return (
        <div className="Contact-page-container">
            <Header />
            <Banner />
            <div className="contact-conteiner">
                <div className="contact-title">
                    <h2>Contacto</h2>
                </div>
                <div className="contact-formulario">

                    <form onSubmit={handleFormSubmit} className="formulario" id="formulario">

                        <div className="formulario__grupo">
                            <label htmlFor="nombre" className="formulario__label">Nombre</label>
                            <div className="formulario__grupo-input">
                                <input type="text" className="formulario__input" name="nombre" id="nombre"
                                    placeholder="John Doe" required />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__apellido">
                            <label htmlFor="apellido" className="formulario__label">Apellido</label>

                            <div className="formulario__grupo-input">
                                <input type="text" className="formulario__input" name="apellido" id="apellido"
                                    placeholder="López Ruiz" required />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__telefono">
                            <label htmlFor="telefono" className="formulario__label">Tfno. Contacto</label>

                            <div className="formulario__grupo-input">
                                <input type="tel" className="formulario__input" name="telefono" id="telefono"
                                    placeholder="654 987 432" required />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__correo">
                            <label htmlFor="correo" className="formulario__label">Email</label>

                            <div className="formulario__grupo-input">
                                <input type="email" className="formulario__input" name
                                    ="correo" id="correo"
                                    placeholder="correo@correo.com" required />
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__comentario">
                            <label htmlFor="comentario" className="formulario__label">Comentario</label>
                            <div className="formulario__grupo-input">
                                <textarea className="formulario__input" id="comentario" name="comentario"
                                    placeholder="¿Tienes alguna duda? Te ayudamos" required></textarea>
                            </div>
                        </div>

                        <div className="formulario__grupo" id="grupo__terminos">
                            <label className="formulario__label">
                                <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                                Acepto los Términos y Condiciones
                            </label>
                        </div>

                        <div className="formulario__grupo formulario__grupo-btn-enviar">
                            <button type="submit" className="formulario__btn">Enviar</button>                        
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};


