import React, {useState} from 'react';

const Formulario = () => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);


  //Handle submit
  const agregarGasto = e => {
    e.preventDefault();

    //validar

    //crear gasto

    //sumar el gasto en el componente APP

    //resetear form
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos</h2>

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="250"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value , 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />


    </form>
  );
}

export default Formulario;