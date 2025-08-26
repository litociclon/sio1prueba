import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioSeguridad = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container seguridad-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Seguridad</h1>
      <h3 className="servicio-texto">- SERVICIO DE CÁMARAS Y SISTEMAS DE SEGURIDAD</h3>
      <h3 className="servicio-texto">- ASESORAMIENTO DE TU PROYECTO DE VIDEO-VIGILANCIA</h3>
      <h3 className="servicio-texto">- INSTALACIÓN DE CÁMARAS CCTV</h3>
      <h3 className="servicio-texto">- MANTENIMIENTO Y SERVICIO TÉCNICO</h3>
      <h3 className="servicio-texto">- RENOVACIÓN DE CÁMARAS</h3>
      <h3 className="servicio-texto">- INSTALACIÓN DE RADIOENLACES</h3>
      <h3 className="servicio-texto">- INSTALACIÓN DVR DESDE 4 A 32 CÁMARAS</h3>
      <h3 className="servicio-texto">- ALARMAS CONTRA ROBO</h3>
      <h3 className="servicio-texto">- SENSORES DE ENTRADA/SALIDA, MOVIMIENTO</h3>

      <h3 className="servicio-texto">- TRABAJOS PARA EMPRESAS, OBRAS, RESIDENCIALES Y DOMICILIARIAS</h3>





      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioSeguridad;