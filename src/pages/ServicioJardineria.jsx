import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioJardineria = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container jardineria-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Jardineria</h1>
      <h3 className="servicio-texto">- SERVICIO DE JARDINERÍA Y PODA</h3>
      <h3 className="servicio-texto">- CORTE DE PASTO Y COLOCACIÓN DE CESPED</h3>
      <h3 className="servicio-texto">- MANTENIMIENTO DE CASAS QUINTAS, PARQUES, DOMICILIARIO</h3>
      <h3 className="servicio-texto">- NIVELACIÓN Y LIMPIEZA DE TERRENOS</h3>
      <h3 className="servicio-texto">- CARGA DE VOLQUETES</h3>
      <h3 className="servicio-texto">- PODA Y TALADO DE TODO TIPO DE ÁRBOLES</h3>
      <h3 className="servicio-texto">- PODA DE ARBUSTOS</h3>
      <h3 className="servicio-texto">- TRABAJAMOS CON ART Y LAS MEDIDAS DE SEGURIDAD PARA EL TRABAJO REQUERIDO</h3>


      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioJardineria;


