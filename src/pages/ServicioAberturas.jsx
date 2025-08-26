import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioAberturas = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container aberturas-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Aberturas</h1>
      <h3 className="servicio-texto">-SERVICIO DE ABERTURAS </h3>
      <h3 className="servicio-texto">- FABRICACIÓN A MEDIDA O ESTÁNDAR</h3>
      <h3 className="servicio-texto">- INSTALACIÓN DE ABERTURAS EN ALUMINIO Y PVC</h3>
      <h3 className="servicio-texto">- INSTALACIÓN DE TODO TIPO DE VENTANAS</h3>
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

export default ServicioAberturas;