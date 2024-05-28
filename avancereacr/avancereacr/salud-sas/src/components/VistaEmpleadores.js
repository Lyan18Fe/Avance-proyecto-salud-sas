import React from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Afiliados from './Afiliados';
import DatosEmpleadores  from './DatosEmpleadores';
import eps from './imagenes/eps.jpg';

function VistaEmpleadores() {
    return (
        <div>
            
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#33FFF9" }}>
            <div className="container-fluid">
                
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-item dropdown d-flex " style={{ marginRight: '50px' }}>
                    <Link className="nav-link " to="/Pagos" role="button" data-bs-toggle >
                            Pagos
                        </Link >
                        <div className="nav-item dropdown d-flex" style={{ marginRight: '50px' }}>
                    <Link className="nav-link " to="/Certificados" role="button" data-bs-toggle >
                            Certificados
                        </Link >
                    </div>
                    </div>
                </div>
            </div>
        </nav>
        <body>
        <div className='tres'>
                    <card >
                    <center><img src={eps} alt = "eps" width={400} /></center>
                    </card>
                    </div>
            <section className="datos">
            <div className="saludo">
            <h1 style={{color:"blue"}}><center>Hola señor empleador</center></h1>
            </div>
            <div className="datoss">
            <DatosEmpleadores/>
            
            
            </div>
            </section>
           
                    
        </body>

        
        <footer className="caja c3">
                     <h5><center>Ley de Transparencia EPS</center></h5>
                     <p><center>Ley 1712 de 2014: “Por medio de la cual se crea la Ley de Transparencia y del derecho de acceso a la Información Pública Nacional y se dictan otras disposiciones”.</center>​</p>
                 </footer>
        </div>
    );
    
}
export default VistaEmpleadores 
