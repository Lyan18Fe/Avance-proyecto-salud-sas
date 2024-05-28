import React from 'react'
import VistaEmpleadores from './VistaEmpleadores';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const Empleadores = ({setEmpleador}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const razonSocial = e.target.elements.Nombre.value;
    const nit = e.target.elements.Nit.value;
    const direccion = e.target.elements.Direccion.value;
    const telefono = e.target.elements.Telefono.value;
    const usuario = e.target.elements.usuario.value;
    const contrasena = e.target.elements.contrasena.value;
    

    const nuevoEmpleador = {
      "razonSocial":razonSocial,
      "nit": nit,
      "direccion": direccion,
      "telefono": telefono,
      "usuario" : usuario,
      "contrasena": contrasena
    };

  
    setEmpleador(prevEmpleador => [...prevEmpleador, nuevoEmpleador]);
  }
    return (
      <div className='container'>
        
        <form onSubmit={handleSubmit}>
        <p>Registro de empleadores</p>
          <label htmlFor="RazonSocial" className='form-label'>Razon Social</label>
          <input type='text' id='RazonSocial' placeholder='RazonSocial' className='form-control m-2' /><br />
  
          <label htmlFor="Nit" className='form-label'>Nit</label>
          <input type='text' id='Nit' placeholder='Nit' className='form-control m-2' /><br />
  
          <label htmlFor="Direccion" className='form-label'>Dirección</label>
          <input type='text' id='Direccion' placeholder='Dirección' className='form-control m-2' /><br />
  
          <label htmlFor="Telefono" className='form-label'>Teléfono</label>
          <input type='text' id='Telefono' placeholder='Teléfono' className='form-control m-2' /><br />
  
          <label htmlFor="usuario" className='form-label'>Nombre de usuario</label>
          <input type='text' id='usuario' placeholder='escoge nombre de usuario' className='form-control m-2' /><br />
  
          <label htmlFor="contrasena" className='form-label'>Contraseña</label>
          <input type='password' id='contrasena' placeholder='contrasena' className='form-control m-2' /><br />
  
          <select id="TipoAfiliado" className="form-select m-2" aria-label="Tipo de afiliado">
            <option value="">Seleccione tipo de afiliado</option>
            <option value="Empleado">Afiliados</option>
            <option value="Empresa">Empleadores</option>
            <option value="Independiente">Independientes</option>
          </select>
  
          <Link className="nav-link " to="/VistaEmpleadores" role="button" data-bs-toggle >
                            Enviar 
                        </Link >
        </form>
      </div>
    )
  







  return (
    <div className='container'>
    <form>
        <label for="razonsocial" className='form-label ' >Razón Social</label>
        <input type='text' id='razonsocial' placeholder='Razon social' className='form-control m-2 '></input> <br/>
        <label for="nit" className='form-label '>NIT</label>
        <input type='text' id='nit' placeholder='NIT' className='form-control m-2 '></input> <br/>
        <label for="direccion" className='form-label ' >Direccion</label>
        <input type='text' id='direccion' placeholder='direccion' className='form-control m-2 '></input> <br/>
        <label for="telefono" className='form-label '>Telefono</label>
        <input type='text' id='telefono' placeholder='telefono' className='form-control m-2 '></input>
        
        <select class="form-select " aria-label="Default select example">
        <option selected>Seleccione tipo de afiliado</option>
        <option value="1">Empleado</option>
        <option value="2">Empresa</option>
        <option value="3">Independiente</option>
        </select>

        <button type='submit' className='btn btn-primary mt-3'>Enviar</button>
    </form>
    </div>
  )
}

export default Empleadores
