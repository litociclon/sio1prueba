import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OfferPopup2.css";

const OfferPopup2 = () => {
  // 🔧 CONFIGURACIÓN DE LA OFERTA
  const isOfferActive = false; // Cambiar a false para ocultarla
  const offerText = "¡Promo especial este mes!";
  const offerLink = "/servicio/construccion"; // Redirección al clic

  // 🔹 Múltiples imágenes de la oferta
  const offerImages = [
    "/images/oferta2.jpeg",
    "/images/oferta3.jpeg",
];

  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOfferActive) {
      setShowPopup(true);
    }
  }, [isOfferActive]);

  // ⏩ Cambio manual de imágenes
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % offerImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? offerImages.length - 1 : prev - 1
    );
  };

  // 🔁 Cambio automático cada 4 segundos
  useEffect(() => {
    if (showPopup && offerImages.length > 1) {
      const interval = setInterval(() => {
        nextImage();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showPopup, offerImages.length]);

  const handleClose = () => setShowPopup(false);

  const handleClickOffer = () => {
    navigate(offerLink);
    setShowPopup(false);
  };

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  if (!showPopup) return null;

  return (
    <div className="offer-overlay2">
      <div className="offer-popup2">
        <button className="close-btn2" onClick={handleClose}>✖</button>

        <div className="offer-carousel2">
          <button className="arrow left2" onClick={prevImage}>‹</button>

          <img
            src={offerImages[currentIndex]}
            alt={`Oferta ${currentIndex + 1}`}
            className="offer-image2"
            onClick={handleClickOffer}
          />

          <button className="arrow right2" onClick={nextImage}>›</button>
        </div>

        {/* 🔵 Indicadores de puntos */}
        <div className="offer-dots2">
          {offerImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active2" : ""}`}
              onClick={() => handleSelectImage(index)}
            ></span>
          ))}
        </div>

        <p className="offer-text2">{offerText}</p>
        <button className="offer-btn2" onClick={handleClickOffer}>
          Pedilo
        </button>
      </div>
    </div>
  );
};

export default OfferPopup2;