import React from 'react';
import { Link } from 'react-router-dom';
import DatosUsuario from './DatosUsuarios';
import eps from './imagenes/eps.jpg';
import './vistaAfiliados.css';

function VistaAfiliados() {
  return (
    <div>

      <div className="saludo">
          <h1 className='title-welcome'><center>Lo que necesitas aun Solo Click</center> </h1>
        </div>

      <hr></hr>
      
      <nav className="navbar-navbar-expand-lg" style={{ backgroundColor: "#33FFF9" }}>

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
            <div className="nav-item-dropdown-d-flex">
              <Link className="nav-link" to="/Citas" role="button" aria-expanded="false">Citas</Link>
            </div>

            <div className="nav-item-dropdown-d-flex" >
              <Link className="nav-link" to="/CertificadosAfiliados" role="button">Certificados</Link>
            </div>

            <div className="nav-item-dropdown-d-flex" >
              <Link className="nav-link" to="/historias" role="button">Historias Medicas</Link>
            </div>

        </div>
      </nav>
      <div className="tres">
        <div className="card">
          <img src={eps} alt="eps" width={400} className="d-block mx-auto" />
        </div>
      </div>
      <section className="datos">
        <div className="datoss">
          <DatosUsuario/>
        </div>
      </section>
      <footer className="cajac3">
        <h5>Ley de Transparencia EPS</h5>
        <p>Ley 1712 de 2014: “Por medio de la cual se crea la Ley de Transparencia y del derecho de 
        acceso a la Información Pública Nacional y se dictan otras disposiciones”. </p>
      </footer>
    </div>
  );
}

export default VistaAfiliados;
