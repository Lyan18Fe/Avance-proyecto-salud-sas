import './App.css';
import Afiliados from './components/Afiliados';
import Empleadores from './components/Empleadores';
import Home from './components/Home';
import Independientes from './components/Independientes';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Registrar from './components/Registrar';
import IniciarSesion from './components/IniciarSesion';
import VistaAfiliados from './components/VistaAfiliados';
import VistaEmpleadores from './components/VistaEmpleadores';
import Citas from './components/Citas';
import { useEffect, useState } from 'react';
import Historias from './components/Historias';
import CertificadosAfiliados from './components/CertificadosAfiliados';
function App() {
  const [afiliados, setAfiliados] = useState([]);
  const [empleador, setEmpleador] = useState([]);
  const [citas, setCitas] = useState([]); // Añadir estado para citas

  useEffect(() => {
    // Código para ejecutar al montar el componente, si es necesario
  }, []);

  return (
    <div>
      <div className="App1">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/afiliados" element={<Afiliados setAfiliados={setAfiliados} />} />
        <Route path="/empleadores" element={<Empleadores setEmpleador={setEmpleador} />} />
        <Route path="/independientes" element={<Independientes />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/IniciarSesion" element={<IniciarSesion afiliados={afiliados} empleador={empleador} />} />
        <Route path="/VistaAfiliados" element={<VistaAfiliados />} />
        <Route path="/VistaEmpleadores" element={<VistaEmpleadores />} />
        <Route path="/Citas" element={<Citas setCitas={setCitas} />} /> {/* Pasar setCitas como prop */}
        <Route path="/Historias" element={<Historias />} />
        <Route path="/CertificadosAfiliados" element={<CertificadosAfiliados/>} />
      </Routes>
    </div>
  );
}

export default App;
