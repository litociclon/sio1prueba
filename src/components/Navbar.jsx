import { useState } from 'react';
import { Link } from 'react-router-dom';
import BudgetModal from './BudgetModal';
import './Navbar.css';
import logo from '../assets/SioMetalizado.png';

const Navbar = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"> <img src={logo} alt="Logo" className='logo' /> </Link>
        </div>

        {/* Botón hamburguesa (solo en mobile) */}
        <div className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          ☰
        </div>

        {/* Links (con toggle en mobile) */}
        <ul className={`navbar-links ${menuAbierto ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
          <li><a href="#quienes-somos" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</a></li>
          <li><a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a></li>
          <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
          <li>
            <button className="btn-presupuesto" onClick={() => { abrirModal(); setMenuAbierto(false); }}>
              Pedí tu Presupuesto
            </button>
          </li>
        </ul>
      </nav>

      {/* Modal de presupuesto */}
      <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />
    </>
  );
};

export default Navbar;




































/*import { useState } from 'react';
import { Link } from 'react-router-dom';
import BudgetModal from './BudgetModal'; // Asegurate que la ruta esté bien
import './Navbar.css';
import logo from '../assets/SioMetalizado.png';

const Navbar = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"> <img src={logo} alt="Logo" className='logo' /> </Link>
           
        </div>
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#quienes-somos">Sobre Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li>
            <button className="btn-presupuesto" onClick={abrirModal}>
              Pedí un Presupuesto
            </button>
          </li>
        </ul>
      </nav>
      

      {Modal de presupuesto }
      <BudgetModal isOpen={modalAbierto} onClose={cerrarModal} />
    </>
  );
};

export default Navbar; */








