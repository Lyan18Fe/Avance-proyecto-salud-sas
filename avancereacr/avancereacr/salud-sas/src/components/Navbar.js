import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#33FFF9" }}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">
                    <img src="/who-emblem.png" alt="emblema world heatlh"  style={{ width: '50px', height: '50px'}} />&nbsp;
                    Salud SAS
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ms-auto">
                    <div className="nav-item dropdown d-flex" style={{ marginRight: '20px'  }}>
                        <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Registrar
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/Afiliados">Afiliados</Link></li>
                            <li><Link className="dropdown-item" to="/independientes">Independientes</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/empleadores">Empleadores</Link></li>
                        </ul>

                    </div>
                    <div className="nav-item dropdown custom-margin" >
                        <Link className="nav-link dropdown-toggle" to="/IniciarSesion">Iniciar Sesion  </Link>
                            
                        
                        
                    </div>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar