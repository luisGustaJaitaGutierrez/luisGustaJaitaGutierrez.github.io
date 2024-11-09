import React, { useState } from 'react';

const AlgoritmoCongruencialMultiplicativo = () => {
  const [a, setA] = useState('');
  const [x, setX] = useState('');
  const [m, setM] = useState('');
  const [N, setN] = useState('');
  const [resultados, setResultados] = useState([]);

  const algCongMult = (a, x, m, N) => {
    let tem = x;
    const resultadosTemp = [];

    for (let i = 0; i < N; i++) {
      let res = (a * tem) % m;
      let r = m - 1;
      let result_r = res / r;

      resultadosTemp.push({
        iteracion: i + 1,
        x: res,
        r: result_r.toFixed(4),
      });

      tem = res;
    }

    setResultados(resultadosTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const aVal = parseInt(a);
    const xVal = parseInt(x);
    const mVal = parseInt(m);
    const NVal = parseInt(N);

    algCongMult(aVal, xVal, mVal, NVal);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo Congruencial Multiplicativo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="a">Valor de a: </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="x">Valor de x<sub>0</sub> (semilla): </label>
        <input
          type="number"
          id="x"
          value={x}
          onChange={(e) => setX(e.target.value)}
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
        <label htmlFor="N">Número de iteraciones (N): </label>
        <input
          type="number"
          id="N"
          value={N}
          onChange={(e) => setN(e.target.value)}
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

export default AlgoritmoCongruencialMultiplicativo;
