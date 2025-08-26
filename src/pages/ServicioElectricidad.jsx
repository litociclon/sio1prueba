import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioElectricidad = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container electricidad-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Electricidad</h1>
      <h3 className="servicio-texto">- SERVICIO DE ELECTRICIDAD</h3>
      <h3 className="servicio-texto">- INSTALACIONES ELÉCTRICAS</h3>
      <h3 className="servicio-texto">- INSTALACIONES, MEDICIONES, DETECCIÓN DE FALLAS, REPARACIONES</h3>
      <h3 className="servicio-texto">- ARMADO Y REPARACIÓN DE TABLEROS ELECTRICOS, TOMAS, ILUMINACIÓN, SENSORES DE MOVIMIENTO, TÉRMICAS, DISYUNTORES</h3>
      <h3 className="servicio-texto">- ILUMINACIÓN EXTERIOR E INTERIOR</h3>
      <h3 className="servicio-texto">- DISEÑO DE PLANO</h3>

      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioElectricidad;



