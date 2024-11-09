// App.js
import React, { useState } from 'react';
import CongruencialAditivo from './components/congruencial_aditivo';
import CongruencialMultiplicativo from './components/congruencial_multiplicativo';
import AlgoritmoCongruencialNoLineal from './components/congruencial_no_lineal';
import AlgoritmoCuadradosMedios from './components/cuadrados_medios';
import AlgoritmoLineal from './components/lineal';
import AlgoritmoMultiplicativoConstante from './components/multiplicativo_constante';
import AlgoritmoProductosMedios from './components/productos_medios';

function App() {
  // State to track which component to show
  const [activeComponent, setActiveComponent] = useState(null);

  // Handler function to update the active component
  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <h1>Numeros Pseudo Aleatorios</h1>
      <p>Nombre: Manuel Martinez Orcko</p>
      <p>Simulacion de Sistemas sis-645</p>

      {/* Buttons to show different components */}
      <button onClick={() => showComponent('congruencial_aditivo')}>
        cong aditivo
      </button>
      <button onClick={() => showComponent('congruencial_multiplicativo')}>
        cong multiplicativo
      </button>
      <button onClick={() => showComponent('congruencial_no_lineal')}>
        cong no lineal
      </button>
      <button onClick={() => showComponent('cuadrados_medios')}>
        cuadrados medios
      </button>
      <button onClick={() => showComponent('lineal')}>
        lineal
      </button>
      <button onClick={() => showComponent('multiplicativo_constante')}>
        multiplicativo constante
      </button>
      <button onClick={() => showComponent('productos_medios')}>
        productos medios
      </button>
      {/* Add more buttons for other components */}

      {/* Conditionally render the components */}
      {activeComponent === 'congruencial_aditivo' && <CongruencialAditivo />}
      {activeComponent === 'congruencial_multiplicativo' && <CongruencialMultiplicativo />}
      {activeComponent === 'congruencial_no_lineal' && <AlgoritmoCongruencialNoLineal />}
      {activeComponent === 'cuadrados_medios' && <AlgoritmoCuadradosMedios />}
      {activeComponent === 'lineal' && <AlgoritmoLineal />}
      {activeComponent === 'multiplicativo_constante' && <AlgoritmoMultiplicativoConstante />}
      {activeComponent === 'productos_medios' && <AlgoritmoProductosMedios />}
    </div>
  );
}

export default App;
