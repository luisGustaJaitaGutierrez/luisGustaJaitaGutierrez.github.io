import React, { useState } from 'react';

const AlgoritmoCongruencialAditivo = () => {
  const [secuencia, setSecuencia] = useState('');
  const [n, setN] = useState('');
  const [m, setM] = useState('');
  const [iter, setIter] = useState('');
  const [resultados, setResultados] = useState([]);

  const algCongAditivo = (secuencia, n, m, iter) => {
    let x_i = secuencia.length - 1;
    let x_n = secuencia.length - n;
    let caja = [...secuencia];
    const resultadosTemp = [];

    for (let i = 0; i < iter; i++) {
      let res = (caja[x_i] + caja[x_n]) % m;
      let r = res / (m - 1);

      resultadosTemp.push({
        iteracion: i + 1,
        x: res,
        r: r.toFixed(4),
      });

      caja.push(res);
      x_i++;
      x_n++;
    }

    setResultados(resultadosTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const secuenciaArr = secuencia.split(',').map(Number);
    const nVal = parseInt(n);
    const mVal = parseInt(m);
    const iterVal = parseInt(iter);

    algCongAditivo(secuenciaArr, nVal, mVal, iterVal);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo Congruencial Aditivo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="secuencia">Secuencia inicial (separada por comas): </label>
        <input
          type="text"
          id="secuencia"
          value={secuencia}
          onChange={(e) => setSecuencia(e.target.value)}
          placeholder="Ej: 3,5,8,13"
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="n">Valor de n: </label>
        <input
          type="number"
          id="n"
          value={n}
          onChange={(e) => setN(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="m">Valor de m: </label>
        <input
          type="number"
          id="m"
          value={m}
          onChange={(e) => setM(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="iter">Número de iteraciones: </label>
        <input
          type="number"
          id="iter"
          value={iter}
          onChange={(e) => setIter(e.target.value)}
          required
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
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>x</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center', backgroundColor: '#4CAF50', color: 'white' }}>r</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((res, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.iteracion}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.x}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px 12px', textAlign: 'center' }}>{res.r}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlgoritmoCongruencialAditivo;
