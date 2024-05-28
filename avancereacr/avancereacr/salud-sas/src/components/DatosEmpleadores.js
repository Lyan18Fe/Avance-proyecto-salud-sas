import React from 'react';
import './VistaEmpleadores';



function DatosEmpleadores(props){
    console.log(props);
    return(
    <div className="Datos" >

    <div className='datosEmpleadores'style={{backgroundColor:'green'}} >

    <br></br>
    <center><p className="dato-nombre">Nombre o Razon social:{props.nombre}</p></center>
    <center><p className="dato-numIdentificacion">Nit:{props.identificacion}</p></center>
    <center><p className="dato-correo">Correo:{props.correo}</p></center>
    <center><p className="dato-ips">Numero de celular:{props.celular}</p></center>
    
    <br></br>
    <br></br>
    </div>
    </div>

);
}

export default DatosEmpleadores ;