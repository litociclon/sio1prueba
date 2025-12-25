import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./styleHome.css"
import decorativa from '../assets/siodecorativa.jpeg';
import decorativa2 from '../assets/siodecorativa2.jpeg';
import img1 from '../assets/carrusel1.jpg';
import img2 from '../assets/carrusel2.jpg';
import img3 from '../assets/carrusel3.jpeg';
import img4 from '../assets/carrusel4.jpg';
import img5 from '../assets/carrusel5.jpg';
import equipo from '../assets/equipo.jpeg';
import logoFooter from '../assets/SioFooter2.png';
import OfferPopup from "../components/OfferPopup";
import OfferPopup2 from "../components/OfferPopup2";

const images = [img1, img2, img3, img4, img5];

const servicios = [
  { nombre: 'Construcción', imagen: 'servicioconstruccion.jpg', icono: 'iconconstruccion.jpeg', ruta: '/servicio/construccion' },
  { nombre: 'Climatización', imagen: 'servicioclimatizacion.jpeg', icono: 'iconclimatizacion2.jpeg', ruta: '/servicio/climatizacion' },
  { nombre: 'Pintura', imagen: 'serviciopintura.jpg', icono: 'iconpintura.png', ruta: '/servicio/pintura' },
  { nombre: 'Jardinería', imagen: 'serviciojardineria.jpeg', icono: 'iconjardineria.png', ruta: '/servicio/jardineria' },
  { nombre: 'Seguridad', imagen: 'servicioseguridad.jpg', icono: 'iconseguridad.jpeg', ruta: '/servicio/seguridad' },
  { nombre: 'Electricidad', imagen: 'servicioelectricidad.jpg', icono: 'iconelectricidad.png', ruta: '/servicio/electricidad' },
  { nombre: 'Aberturas', imagen: 'servicioaberturas.jpg', icono: 'iconaberturas.png', ruta: '/servicio/aberturas' },
  { nombre: 'Carpinteria', imagen: 'serviciocarpinteria.jpg', icono: 'iconcarpinteria.png', ruta: '/servicio/carpinteria' },
  { nombre: 'Laqueado', imagen: 'serviciolaqueado.jpg', icono: 'iconlaqueado.png', ruta: '/servicio/laqueado' },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="inicio">
      <Navbar />  
        <OfferPopup />
         <OfferPopup2 />


      <div className="home">
        <img src={decorativa} alt="Decorativa" className="decorativa-image" />
        <img src={decorativa2} alt="Decorativa" className='decorativa-image2' />

        <div className="carousel">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`carousel-slide ${index === current ? 'active' : ''}`}
            />
          ))}
        </div>

        <section id="quienes-somos" className="about section-container">
          <h2 className="about-title">¿Quiénes somos? y ¿Como trabajamos?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Somos un grupo de profesionales dedicados a brindar soluciones a los requerimientos de
                nuestros mas exigentes clientes. Tenemos una amplia zona de cobertura en los rubros de
                albañileria, electricidad, camaras de seguridad y climatizacion profesional, dando asi una cantidad de opciones
                para que no tengas que buscarlos de manera separadas, sino contratar todo en el mismo lugar.
              </p>
              <h3>
                 Nuestro lema es: Soluciones de calidad, clientes de calidad.
              </h3>
            </div>
            <div className="about-image">
              <img src={equipo} alt="Nuestro equipo" className="equipo-img" />
            </div>
          </div>
        </section>

        <section id="servicios" className="services section-container">
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-grid">
            {servicios.map((servicio) => (
              <div key={servicio.nombre} className="service-card">
                <img
                  src={`/images/${servicio.imagen}`}
                  alt={servicio.nombre}
                  className="service-image"
                />
                <div className="service-content">
                  <h3 className="service-title">{servicio.nombre}</h3>
                  <img 
                    src={`/images/${servicio.icono}`} 
                    className="service-icon"
                    alt={servicio.nombre + " icono"}
                  /> 
                  <div className="service-link-wrapper">
                   <Link to={servicio.ruta} className="service-link">Conoce más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="contacto-section section-container">
          <h2 className="contacto-titulo">Estamos para ayudarte, contáctanos y seguinos en nuestras redes</h2>
          <div className="contacto-enlaces">
            <a href="https://wa.me/message/DOV67WCOZEIRO1" target="_blank" rel="noopener noreferrer" className="contacto-link whatsapp">
              <FaWhatsapp className="icono-contacto" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/oestesolucionesintegrales?igsh=aXJmbjE4d2UzOWlv" target="_blank" rel="noopener noreferrer" className="contacto-link instagram">
              <FaInstagram className="icono-contacto" /> Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576038471129" target="_blank" rel="noopener noreferrer" className="contacto-link facebook">
              <FaFacebook className="icono-contacto" /> Facebook
            </a>
            <a href="mailto:siosolucionesintegralesoeste@gmail.com" className="contacto-link gmail">
              <FaEnvelope className="icono-contacto" /> Gmail
            </a>
          </div>
        </section>
         

         <section className='footer-section'>
        <footer className="section-footer">
          <div className="footer-contenido">
            <div className="footer-logo">
              <img src={logoFooter} alt="Logo" className="logofooter" /> 
            </div>
            <p>&copy; {new Date().getFullYear()} SIO - Soluciones Integrales Oeste. Todos los derechos reservados.</p>
            <p>Diseñado para ofrecer soluciones a nuestros clientes</p>
          </div>
        </footer>
        </section>
      </div>
    </div>
  );
};

export default Home;



















/*import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import "./styleHome.css"
import decorativa from '../assets/siodecorativa.jpeg';
import img1 from '../assets/carrusel1.jpg';
import img2 from '../assets/carrusel2.jpg';
import img3 from '../assets/carrusel3.jpeg';
import img4 from '../assets/carrusel4.jpg';
import img5 from '../assets/carrusel5.jpg';

import equipo from '../assets/equipo.jpg';
import logoFooter from '../assets/SioFooter.png';

const images = [img1, img2, img3, img4, img5];

const servicios = [
  { nombre: 'Construcción', imagen: 'construccion.jpg', icono: 'construccion.jpeg', ruta: '/servicio/construccion' },
  { nombre: 'Climatización', imagen: 'climatizacion.jpeg', icono: 'climatizacion2.jpeg', ruta: '/servicio/climatizacion' },
  { nombre: 'Pintura', imagen: 'pintura.jpg', icono: 'pintura.png', ruta: '/servicio/pintura' },
  { nombre: 'Jardinería', imagen: 'jardineria.jpeg', icono: 'jardineria.png', ruta: '/servicio/jardineria' },
  { nombre: 'Seguridad', imagen: 'seguridad.jpg', icono: 'seguridad.jpeg', ruta: '/servicio/seguridad' },
  { nombre: 'Electricidad', imagen: 'electricidad.jpg', icono: 'electricidad.png', ruta: '/servicio/electricidad' },
  { nombre: 'Aberturas', imagen: 'aberturas.jpg', icono: 'aberturas.png', ruta: '/servicio/aberturas' },
  { nombre: 'Carpinteria', imagen: 'carpinteria.jpg', icono: 'carpinteria.png', ruta: '/servicio/carpinteria' },
  { nombre: 'Laqueado', imagen: 'laqueado.jpg', icono: 'laqueado.png', ruta: '/servicio/laqueado' },
  
];

const Home = () => {

  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (

  <div id="inicio">
    <Navbar />  
  
    
    <div id="inicio" className="home">
       <img src={decorativa} alt="Decorativa" className="decorativa-image" />

      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`carousel-slide ${index === current ? 'active' : ''}`}
          />
        ))}
      </div>
     

      <section id="quienes-somos" className="about">
        <h2 className="about-title">¿Quiénes somos?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Somos un equipo de profesionales con amplia experiencia en construcción,
              climatización, electricidad, pintura, jardinería y seguridad.
              Nos enfocamos en brindar soluciones integrales para hogares y empresas,
              con compromiso, calidad y atención personalizada.
            </p>
          </div>
          <div className="about-image">
            <img src={equipo} alt="Nuestro equipo" className="equipo-img" />
          </div>
        </div>
      </section>

      <section id="servicios" className="services">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {servicios.map((servicio) => (
            <div key={servicio.nombre} className="service-card">
              <img
                src={`/src/assets/${servicio.imagen}`}
                alt={servicio.nombre}
                className="service-image"
              />
              <div className="service-content">
                <h3 className="service-title">  {servicio.nombre} </h3>
                  <img src={`/src/assets/${servicio.icono}`}
                  className='service-icon'
                  /> 
                <div className="service-link-wrapper">
                  <a href={servicio.ruta} className="service-link">Conoce más</a>
          
                </div>
              </div>
            </div>

             ))}
        </div>
      </section>

      <section>
        <div id="contacto" className="contacto-section">
  <h2 className="contacto-titulo">Estamos para ayudarte, contáctanos y seguinos en nuestras redes</h2>
  <div className="contacto-enlaces">
    <a
      href="https://wa.me/5491123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="contacto-link whatsapp"
    >
      <FaWhatsapp className="icono-contacto" /> WhatsApp
    </a>
    <a
      href="https://www.instagram.com/tu_usuario"
      target="_blank"
      rel="noopener noreferrer"
      className="contacto-link instagram"
    >
      <FaInstagram className="icono-contacto" /> Instagram
    </a>
    <a
      href="https://www.facebook.com/tu_usuario"
      target="_blank"
      rel="noopener noreferrer"
      className="contacto-link facebook"
    >
      <FaFacebook className="icono-contacto" /> facebook
    </a>
    <a
      href="mailto:tucorreo@gmail.com"
      className="contacto-link gmail"
    >
      <FaEnvelope className="icono-contacto" /> Gmail
    </a>
  </div>
</div>
      </section>

      <footer className="footer">
  <div className="footer-contenido">
    <div className="footer-logo">
           <img src={logoFooter} alt="Logo" className='logofooter' /> 
           
        </div>
    <p>&copy; {new Date().getFullYear()} SIO - Soluciones Integrales Oeste. Todos los derechos reservados.</p>
    <p>Diseñado para ofecer soluciones a nuestros clientes</p>
  </div>
</footer>

    </div>
    </div>
    
  );
};


export default Home;*/