import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioPintura = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container pintura-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Pintura</h1>
      <h3 className="servicio-texto">- SERVICIO DE PINTURA</h3>
      <h3 className="servicio-texto">- INTERIORES/EXTERIORES</h3>
      <h3 className="servicio-texto">- TEXTURIZADO</h3>
      <h3 className="servicio-texto">- ACONDICIONAMIENTO DE PAREDES</h3>
      <h3 className="servicio-texto">- TRABAJOS EN ALTURA</h3>
      <h3 className="servicio-texto">- IMPERMEABILIZACIÓN DE TECHOS</h3>
      <h3 className="servicio-texto">- EMPAPELADO</h3>
      <h3 className="servicio-texto">- BARNIZADO</h3>
      <h3 className="servicio-texto">- FACHADA</h3>
      <h3 className="servicio-texto">- TRABAJOS EN PUERTAS, REJAS, VENTANAS</h3>
      <h3 className="servicio-texto">- MANTENIMIENTO</h3>

      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioPintura;