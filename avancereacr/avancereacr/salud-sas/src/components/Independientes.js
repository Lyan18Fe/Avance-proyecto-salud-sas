import React from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


const Independientes = () => {
  return (
    
    <div className='container'>
      
    <form>
    <p>Registro de Usuarios Independientes</p>
    <label for="razonsocial" className='form-label ' >Nombre </label>
    <input type='text' id='Nombre' placeholder='nombre' className='form-control m-2 '></input> <br/>
    <label for="razonsocial" className='form-label ' >Apellido</label>
    <input type='text' id='Apellido' placeholder='apellido' className='form-control m-2 '></input> <br/> 
    <label for="documento" className='form-label '>Documento</label>
    <input type='text' id='documento' placeholder='documento' className='form-control m-2 '></input> <br/>
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

    <Link className="btn btn-primary mt-3" type='submit' to="/VistaIndependientes" role="button" data-bs-toggle >
                            Enviar
                        </Link >
</form>
    </div>
  )
}

export default Independientes
