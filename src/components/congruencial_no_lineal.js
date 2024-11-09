import React, { useState } from 'react';

const AlgoritmoCongruencialNoLineal = () => {
  const [semilla, setSemilla] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [m, setM] = useState('');
  const [resultados, setResultados] = useState([]);

  const algCongNoLineal = (semilla, a, b, c, m) => {
    let x = semilla;
    const resultadosTemp = [];

    for (let i = 0; i < m; i++) {
      let res = ((a * (x ** 2)) + (b * x) + c) % m;
      let r = res / (m - 1);

      resultadosTemp.push({
        iteracion: i + 1,
        x: res,
        r: r.toFixed(4),
      });

      x = res;
    }

    setResultados(resultadosTemp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const semillaVal = parseInt(semilla);
    const aVal = parseInt(a);
    const bVal = parseInt(b);
    const cVal = parseInt(c);
    const mVal = parseInt(m);

    algCongNoLineal(semillaVal, aVal, bVal, cVal, mVal);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Algoritmo Congruencial No Lineal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="semilla">Valor de semilla (x<sub>0</sub>): </label>
        <input
          type="number"
          id="semilla"
          value={semilla}
          onChange={(e) => setSemilla(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="a">Valor de a: </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="b">Valor de b: </label>
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          required
          style={{ padding: '5px', width: '120px', marginRight: '10px' }}
        /><br /><br />
        <label htmlFor="c">Valor de c: </label>
        <input
          type="number"
          id="c"
          value={c}
          onChange={(e) => setC(e.target.value)}
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

export default AlgoritmoCongruencialNoLineal;
