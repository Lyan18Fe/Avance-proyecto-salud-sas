import React from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


const IniciarSesion = ({ afiliados , empleador}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const TipoAfiliado=e.target.elements.TipoAfiliado.value;



    // Obtener valores de usuario y contraseña del formulario
    const usuario = e.target.elements.Usuario.value;
    const password = e.target.elements.Password.value;

    let usuarioEncontrado;

    if (TipoAfiliado=="Afiliado"){
          // Buscar el usuario en el array de afiliados
       usuarioEncontrado = afiliados.find(afiliado => afiliado.usuario === usuario);
      }
      else if (TipoAfiliado=="Empleador"){
        usuarioEncontrado = empleador.find(emple=>emple.razonSocial === usuario)
      }
      


    
  
    // fetch traer usuario de base de datos

    // TODO para hacer

    // Validar el inicio de sesión
    if (usuarioEncontrado && usuarioEncontrado.contrasena === password) {
      // Inicio de sesión correcto
      alert('Inicio de sesión correcto');
    } else {
      // Inicio de sesión incorrecto
      alert('Usuario o contraseña incorrectos');
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        
        <select id="TipoAfiliado" className="form-select m-2" aria-label="Tipo de afiliado">
          <option value="Afiliado">Afiliados</option>
          
        </select>

        <label htmlFor="Usuario" className='form-label'>Usuario</label>
        <input type='text' id='Usuario' placeholder='Usuario' className='form-control m-2' /><br />
        

        <label htmlFor="Password" className='form-label'>Contraseña</label>
        <input type='password' id='Password' placeholder='Contraseña' className='form-control m-2' /><br />

        <Link type='submit' className='btn btn-primary mt-3' Link to="/VistaAfiliados" role="button">Iniciar sesión</Link >
      </form>
      <div className='footer'>
      <footer className="caja c3">
                     <h5><center>Ley de Transparencia EPS</center></h5>
                     <p><center>Ley 1712 de 2014: “Por medio de la cual se crea la Ley de Transparencia y del derecho de acceso a la Información Pública Nacional y se dictan otras disposiciones”.</center>​</p>
                 </footer></div>
    </div>
    
  )
}

export default IniciarSesion;
