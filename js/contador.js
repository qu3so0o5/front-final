const el = document.getElementById('count');
const btn = document.getElementById('btn');

const navigation = performance.getEntriesByType('navigation')[0];

const esRecarga = navigation?.type === 'reload';
const esEntrada = navigation?.type === 'navigate';

fetch("http://127.0.0.1:8000/contador")
  .then(res => res.json())
  .then(data => {

    const nuevoValor = (esRecarga || esEntrada)
      ? data.contador + 1
      : data.contador;

    return fetch(
      `http://127.0.0.1:8000/contador/${nuevoValor}`,
      { method: 'PUT' }
    );
  })
  .then(res => res.json())
  .then(data => {
    el.innerText = data.contador;
  })
  .catch(err => console.error("Error:", err));