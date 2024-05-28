import React from 'react'

const Registrar = () => {

    return <div className="Registrar">
    <form>

    <label for="usuario" className='form-label ' >Usuario </label>
    <input type='text' id='usuario' placeholder='usuario' className='form-control m-2 '></input> <br/>
    <label for="apellido" className='form-label ' >Apellido/Razon Social</label>
    <input type='text' id='Apellido' placeholder='apellido' className='form-control m-2 '></input> <br/> 
    <label for="documento" className='form-label '>nombre</label>
    <input type='text' id='nombre' placeholder='nombre' className='form-control m-2 '></input> <br/>
 <br/>
    <select class="form-select " aria-label="Default select example">
    <option selected>Seleccione tipo de afiliado</option>
    <option value="1">Empleado</option>
    <option value="2">Empresa</option>
    <option value="3">Independiente</option>
    </select> 
    <label for="direccion" className='form-label ' >contraseña</label>
    <input type='text' id='contraseña' placeholder='contraseña' className='form-control m-2 '></input>
     
    
    <button type='submit' className='btn btn-primary mt-3'>Enviar</button>
</form>
    
    </div>
}

export default Registrar