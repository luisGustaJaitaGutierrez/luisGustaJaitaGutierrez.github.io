import React, { useState } from 'react';

const AlgoritmoMultiplicativoConstante = () => {
  const [semilla, setSemilla] = useState('');
  const [constante, setConstante] = useState('');
  const [num, setNum] = useState('');
  const [digito, setDigito] = useState(4);
  const [resultados, setResultados] = useState([]);
  const [pruebaMedias, setPruebaMedias] = useState(null);
  const [pruebaVarianza, setPruebaVarianza] = useState(null);
  const [sumaR, setSumaR] = useState(null);
  const [sumaDesv, setSumaDesv] = useState(null);
  const [cumpleMedias, setCumpleMedias] = useState(null);
  const [cumpleVarianza, setCumpleVarianza] = useState(null);

  const algMultConst = (semilla, constante, num, digito) => {
    let sem = semilla;
    let fijo = constante;
    const resultadosTemp = [];

    for (let m = 0; m < num; m++) {
      let calculo = fijo * sem;
      let producto = calculo.toString();
      let inicio;
      let medio = [];

      if ((producto.length % 2) === 0 && (digito % 2) === 0) {
        inicio = (producto.length / 2) - (digito / 2);
      } else if ((producto.length % 2) !== 0 && (digito % 2) === 0) {
        inicio = Math.floor(producto.length / 2) - (digito / 2);
      } else if ((producto.length % 2) !== 0 && (digito % 2) !== 0) {
        inicio = Math.floor(producto.length / 2) - Math.floor(digito / 2);
      } else {
        inicio = (producto.length / 2) - Math.floor(digito / 2 + 1);
      }

      for (let i = inicio; i < (inicio + digito); i++) {
        medio.push(producto[i]);
      }

      let medioInt = parseInt(medio.join(''));
      let resultado = medioInt / (10 ** digito);

      resultadosTemp.push({
        iteracion: m + 1,
        producto: producto,
        resultado: resultado,
      });

      sem = medioInt;
    }

    setResultados(resultadosTemp);
    realizarPruebas(resultadosTemp.map(res => res.resultado));
  };

  const realizarPruebas = (numeros) => {
    const N = numeros.length;
    const promedio = numeros.reduce((acc, num) => acc + num, 0) / N;
    const sumaRi = numeros.reduce((acc, num) => acc + num, 0);
    const sumaDesviaciones = numeros.reduce((acc, num) => acc + (num - promedio) ** 2, 0);
    const varianza = sumaDesviaciones / N;

    // Prueba de Medias
    const pruebaMediasResultado = (promedio - 0.5) / (1 / Math.sqrt(12 * N));
    setPruebaMedias(pruebaMediasResultado.toFixed(4));

    // Determinar si cumple con la Prueba de Medias (intervalo -1.96 a 1.96 para 95% confianza)
    setCumpleMedias(pruebaMediasResultado >= -1.96 && pruebaMediasResultado <= 1.96 ? 'Sí' : 'No');

    // Prueba de Varianza
    setPruebaVarianza(varianza.toFixed(4));

    // Determinar si cumple con la Prueba de Varianza (valor cercano a 0.0833)
    setCumpleVarianza(varianza >= 0.07 && varianza <= 0.09 ? 'Sí' : 'No');

    // Guardar suma de Ri y suma de desviaciones
    setSumaR(sumaRi.toFixed(4));
    setSumaDesv(sumaDesviaciones.toFixed(4));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const s = parseInt(semilla);
    const c = parseInt(constante);
    const n = parseInt(num);
    const d = parseInt(digito) || 4;

    algMultConst(s, c, n, d);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo Multiplicativo Constante</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="semilla">Semilla: </label>
        <input
          type="number"
          id="semilla"
          value={semilla}
          onChange={(e) => setSemilla(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="constante">Constante: </label>
        <input
          type="number"
          id="constante"
          value={constante}
          onChange={(e) => setConstante(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="num">Cantidad de números: </label>
        <input
          type="number"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="digito">Número de dígitos (opcional, por defecto 4): </label>
        <input
          type="number"
          id="digito"
          value={digito}
          onChange={(e) => setDigito(e.target.value)}
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <input
          type="submit"
          value="Generar"
          style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
        />
      </form>
      <table style={{ width: '60%', borderCollapse: 'collapse', margin: '20px 0', boxShadow: '0 2px 3px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Iteración</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Producto</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((res, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.iteracion}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.producto}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.resultado.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {pruebaMedias && (
        <div>
          <h3>Prueba de Medias: {pruebaMedias} (Cumple: {cumpleMedias})</h3>
          <h3>Prueba de Varianza: {pruebaVarianza} (Cumple: {cumpleVarianza})</h3>
          <h3>Suma de Ri: {sumaR}</h3>
          <h3>Suma de (Ri - R)^2: {sumaDesv}</h3>
        </div>
      )}
    </div>
  );
};

export default AlgoritmoMultiplicativoConstante;
