const express = require('express');
const app = express();
const port = 3000;

const tareas = [
  { id: 1, descripcion: 'Comprar víveres', completada: false },
  { id: 2, descripcion: 'Hacer ejercicio', completada: false },
  { id: 3, descripcion: 'Terminar el proyecto', completada: true },
];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
