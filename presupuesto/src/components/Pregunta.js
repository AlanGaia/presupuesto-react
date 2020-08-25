import React, {Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = () => {

  //State para el presupuesto
  const [cantidad, guardarCantidad] = useState(0);

  //State para el error
  const [error, guardarError] = useState(false);

  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt( e.target.value , 10) );
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //Validar
    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true);
      return;
    }

    //En caso de que pase la validación
    guardarError(false);
  }



  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es inválido" /> : null}

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
          onClick={agregarPresupuesto}
        />
      </form>
    </Fragment>

  );
}

export default Pregunta;