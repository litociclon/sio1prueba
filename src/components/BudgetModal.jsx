import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import thankYouAnimation from "../assets/gracias.json"; // Ruta a tu animación
import "./BudgetModal.css";

const BudgetModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_3hr1few',
        'template_ocjhdiq',
        form.current,
        'T6XyGrEClQvvfcoES'
      ).then(
      () => {
        setSent(true);
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 3000); // muestra la animación 3 segundos
      },
      (error) => {
        alert("Ocurrió un error. Intentá nuevamente.");
        console.error(error);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Volver</button>

        {sent ? (
          <div className="thank-you-animation">
            <Lottie
      animationData={thankYouAnimation}
      loop={false}
              style={{ height: '200px', width: '200px' }}
            />
            <p>¡Gracias por tu consulta!</p>
          </div>
        ) : (
          <>
            <h2>Pedí tu Presupuesto</h2>
            <form ref={form} onSubmit={sendEmail} className="modal-form">
              <input type="text" name="user_name" placeholder="Nombre" required />
              <input type="email" name="user_email" placeholder="Email" required />
              <input type="tel" name="user_phone" placeholder="Teléfono" required />
              <select name="user_service" required>
                <option value="">Seleccioná un servicio</option>
                <option value="Construcción">Construcción</option>
                <option value="Climatización">Climatización</option>
                <option value="Pintura">Pintura</option>
                <option value="Jardinería">Jardinería</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Electricidad">Electricidad</option>
              </select>
              <textarea name="message" placeholder="Contanos qué necesitás y uno de nuestros asesores te responderá a la brevedad" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BudgetModal;