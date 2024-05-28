import React, { useState } from 'react';

const Citas = ({ setCitas }) => {
  const [formData, setFormData] = useState({
    fecha: '',
    ips: '',
    tipoCita: '',
    hora: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Mostrar datos en la consola

    setCitas(prevCitas => [...prevCitas, formData]);

    alert("Su cita hasido asignada con exito...")
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tipoCita" className='form-label'>Tipo de Cita</label>
        <select id="tipoCita" className="form-select m-2" value={formData.tipoCita} onChange={handleChange} aria-label="Tipo de cita">
          <option value="">Seleccione tipo de cita</option>
          <option value="Medicina General">Medicina General</option>
          <option value="Odontologia">Odontología</option>
        </select>

        <label htmlFor="fecha" className='form-label'>Fecha</label>
        <input type="date" id='fecha' className='form-control m-2' value={formData.fecha} onChange={handleChange} /><br />

        <label htmlFor="hora" className='form-label'>Hora</label>
        <input type="time" id='hora' className='form-control m-2' value={formData.hora} onChange={handleChange} /><br />

        <label htmlFor="ips" className='form-label'>Ips</label>
        <input type='text' id='ips' className='form-control m-2' value={formData.ips} onChange={handleChange} /><br />

        <button type='submit' className='btn btn-primary mt-3'>Confirmar cita</button>
      </form>
    </div>
  );
};

export default Citas;
