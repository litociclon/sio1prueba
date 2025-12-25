import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OfferPopup.css"; // estilos aparte

const OfferPopup = () => {
  // 🔧 CONFIGURACIÓN DE LA OFERTA
  const isOfferActive = false; // Cambiar a false para ocultarla
  const offerImage = "/images/cybermonday.jpeg"; // ruta a la imagen
  const offerText = "¡Conoce las ofertas en la tienda!";
  const offerLink = "https://sioelectrohome.mitiendanube.com/"; // ruta a donde lleva la oferta

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOfferActive) {
      setShowPopup(true);
    }
  }, [isOfferActive]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleClickOffer = () => {
    window.open(offerLink, "_blank"); // abre en nueva pestaña
    setShowPopup(false);
  };



  if (!showPopup) return null;

  return (
    <div className="offer-overlay">
      <div className="offer-popup">
        <button className="close-btn" onClick={handleClose}>✖</button>
        <div className="offer-content" onClick={handleClickOffer}>
          <img src={offerImage} alt="Oferta especial" className="offer-image" />
          <p className="offer-text">{offerText}</p>
          <button className="offer-btn">Tienda</button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;