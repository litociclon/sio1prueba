import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // tu vista principal

import ServicioConstruccion from './pages/ServicioConstruccion';
import ServicioClimatizacion from './pages/ServicioClimatizacion';
import ServicioPintura from './pages/ServicioPintura';
import ServicioElectricidad from './pages/ServicioElectricidad';
import ServicioJardineria from './pages/ServicioJardineria';
import ServicioSeguridad from './pages/ServicioSeguridad';
import ServicioAberturas from './pages/ServicioAberturas';
import ServicioCarpinteria from './pages/ServicioCarpinteria';
import ServicioLaqueado from './pages/ServicioLaqueado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio/construccion" element={<ServicioConstruccion />} />
        <Route path="/servicio/climatizacion" element={<ServicioClimatizacion />} />
        <Route path="/servicio/pintura" element={<ServicioPintura />} />
        <Route path='/servicio/jardineria' element={<ServicioJardineria />} />
        <Route path='/servicio/seguridad' element={<ServicioSeguridad />}/>
        <Route path="/servicio/electricidad" element={<ServicioElectricidad />} />
        <Route path="/servicio/aberturas" element={<ServicioAberturas />} />
        <Route path="/servicio/carpinteria" element={<ServicioCarpinteria />} />
        <Route path="/servicio/laqueado" element={<ServicioLaqueado />} /> 
      </Routes>
    </Router>
  );
}

export default App;























/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
