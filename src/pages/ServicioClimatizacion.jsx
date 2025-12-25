import { useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesServicios.css"; // Asegurate de importar tu archivo de estilos
import BudgetModal from '../components/BudgetModal'; 

const ServicioClimatizacion = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  
    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);


  const navigate = useNavigate();

  return (

    
    <div className="servicio-container climatizacion-bg">
  <div className="contenido-servicio">
    <img src="/images/garantia.jpeg" alt="Imagen de climatización" className="imagen-superior" />
    
    <div className="servicio-box">
      <h1 className="servicio-titulo">Climatización</h1>
      <h3 className="servicio-texto">- INSTALACIÓN, REPARACIÓN DE AIRES ACONDICIONADOS (SPLIT, PISO TECHO, CENTRALES)</h3>
      <h3 className="servicio-texto">- REPARACIÓN DE HELADERA, FREEZER, CAVAS.</h3>
      <h3 className="servicio-texto">- FABRICACIÓN DE CÁMARAS FRIGORÍFICAS.</h3>
      <h3 className="servicio-texto">- INSTALACIÓN, REPARACIÓN DE CALDERAS (DOMICILIARIAS, INDUSTRIALES)</h3>
      <h3 className="servicio-texto">- CLIMATIZACIÓN DE PISCINAS.</h3>
      <h3 className="servicio-texto">- VENTA DE AIRES ACONDICIONADOS, HELADERAS (NUEVO, USADO)</h3>

      <button onClick={abrirModal} className="servicio-boton">Pedi la promo</button>
      <button onClick={() => navigate("/")} className="servicio-boton">Volver al inicio</button>
    </div>

    <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />

   
  </div>
</div>

    
  );
};

export default ServicioClimatizacion;