import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioConstruccion = () => {
   const [modalAbierto, setModalAbierto] = useState(false);
    
      const abrirModal = () => setModalAbierto(true);
      const cerrarModal = () => setModalAbierto(false);

  const navigate = useNavigate();

  return (
    <div className="servicio-container construccion-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Construccion</h1>
      <h3 className="servicio-texto">- SERVICIO DE ALBAÑILERÍA</h3>
      <h3 className="servicio-texto">- CONSTRUCCIÓN DE OBRA</h3>
      <h3 className="servicio-texto">- CIMIENTOS, ENCOFRADOS</h3>
      <h3 className="servicio-texto">- ESTRUCTURAS</h3>
      <h3 className="servicio-texto">- HORMIGÓN ARMADO</h3>
      <h3 className="servicio-texto">- REVESTIMIENTO</h3>
      <h3 className="servicio-texto">- DURLOCK, CIELORRASOS</h3>
      <h3 className="servicio-texto">- RENOVACIÓN DE VIVIENDA</h3>
      <h3 className="servicio-texto">- IMPERMEABILIZACIÓN</h3>
      <h3 className="servicio-texto">- COLOCACIÓN DE BALDOSAS, PORCELANATOS</h3>

    
  


      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioConstruccion;