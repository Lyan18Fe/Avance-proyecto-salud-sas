import React from 'react';
import './VistaAfiliados';



function DatosUsuario(props){
    console.log(props);
    return(
    <div className="Datos" >

    <div className='datosUsuario'>

    <br></br>
    <center><p className="dato-nombre">Nombre y Apellido:{props.nombre}</p></center>
    <center><p className="dato-tipoDeIdentificacion">Tipo de identificacion:{props.tipoIdentificacion}</p></center>
    <center><p className="dato-numIdentificacion">Numero de identificacion:{props.identificacion}</p></center>
    <center><p className="dato-correo">Correo:{props.correo}</p></center>
    <center><p className="dato-ips">Ips:{props.ips}</p></center>
    <center><p className="dato-fechaNac">Fecha de nacimiento:{props.fechaNacimiento}</p></center>
    <br></br>
    <br></br>
    </div>
    </div>

);
}

export default DatosUsuario ;