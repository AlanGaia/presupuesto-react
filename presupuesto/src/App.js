import React , { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  //State presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  //State restante
  const [restante, guardarRestante] = useState(0);
  //State condicional para mostrar pregunta
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  //State para array de gastos
  const [gastos, guardarGastos] = useState([]);


  //agregar un nuevo gasto al array de gastos
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto]);
  }



  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
        
        {mostrarpregunta ? (
          // Preguntar presupuesto si no esta definido

          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        ) : (
          //Si está definido acceder a los gastos del presupuesto

          <div className="row">
            <div className="one-half column">
              {/* Formulario para agregar Gastos del presupuesto */}
              <Formulario
                agregarNuevoGasto={agregarNuevoGasto}
              />
            </div>

            <div className="one-half column">
              <Listado
                gastos={gastos}
              />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>

        )}

        
        </div>
      </header>
    </div>
  );
}

export default App;
