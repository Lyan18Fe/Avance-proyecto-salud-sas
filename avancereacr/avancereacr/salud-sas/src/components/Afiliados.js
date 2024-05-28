import React from 'react';

const Afiliados = ({ setAfiliados }) => {

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const nombre = e.target.elements.Nombre.value;
    const apellido = e.target.elements.Apellido.value;
    const documento = e.target.elements.Documento.value;
    const direccion = e.target.elements.Direccion.value;
    const telefono = e.target.elements.Telefono.value;
    const usuario = e.target.elements.usuario.value;
    const contrasena = e.target.elements.contrasena.value;
    

    const nuevoAfiliado = {
      "nombre": nombre,
      "apellido": apellido,
      "documento": documento,
      "direccion": direccion,
      "telefono": telefono,
      "usuario" : usuario,
      "contrasena": contrasena
    };

    setAfiliados(prevAfiliados => [...prevAfiliados, nuevoAfiliado]);
    console.log(e);
  }

  return (
    <div className='container'>
      <p>Registro de usuarios afiliados</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre" className='form-label'>Nombre</label>
        <input type='text' id='Nombre' placeholder='Nombre' className='form-control m-2' /><br />

        <label htmlFor="Apellido" className='form-label'>Apellido</label>
        <input type='text' id='Apellido' placeholder='Apellido' className='form-control m-2' /><br />

        <label htmlFor="Documento" className='form-label'>Documento</label>
        <input type='text' id='Documento' placeholder='Documento' className='form-control m-2' /><br />

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

        <button type='submit' className='btn btn-primary mt-3'>Enviar</button>
      </form>
    </div>
  )
}

export default Afiliados;
