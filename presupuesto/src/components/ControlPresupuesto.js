import React, {Fragment} from 'react'

const ControlPresupuesto = ({presupuesto, restante}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto Inicial: ${presupuesto}
      </div>
      <div className="alert">
        Restante disponible: ${restante}
      </div>
    </Fragment> 
  );
}

export default ControlPresupuesto;