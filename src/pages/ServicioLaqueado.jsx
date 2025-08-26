import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioLaqueado = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container laqueado-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Laqueado</h1>
      <h3 className="servicio-texto">- DECORACIÓN</h3>
      <h3 className="servicio-texto">- LUSTRE</h3>
      <h3 className="servicio-texto">- LAQUEADO</h3>
      <h3 className="servicio-texto">- RESTAURACIONES</h3>
      
    
      

      <button onClick={abrirModal} className="servicio-boton">Pedir Presupuesto</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioLaqueado;