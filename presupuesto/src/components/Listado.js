import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => (
  <div className="gastos-realizados">
    <h2>Tus gastos</h2>

    {gastos.map( gasto => (
      <Gasto
        key={gasto.id}
        gasto={gasto}
      />
    ))}

  </div>
)

export default Listado;