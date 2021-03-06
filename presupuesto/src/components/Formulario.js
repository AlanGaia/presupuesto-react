import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({guardarGasto, guardarExisteAlgunGasto}) => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);


  //Handle submit
  const agregarGasto = e => {
    e.preventDefault();

    //validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
      guardarError(true);
      return;
    }
    //si paso la validación no hay error
    guardarError(false);

    //crear gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    //sumar el gasto en el componente APP
    guardarGasto(gasto);

    //Al menos existe un Gasto
    guardarExisteAlgunGasto(true);

    //resetear form
    guardarNombre('');
    guardarCantidad(0);
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega un gasto</h2>

      {error ? <Error mensaje="Presupuesto incorrecto, ambos campos son requeridos" /> : null }

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

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarExisteAlgunGasto: PropTypes.func.isRequired,
}

export default Formulario;