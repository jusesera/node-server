const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const tareas = [
  { id: 1, descripcion: 'Comprar víveres', completada: false },
  { id: 2, descripcion: 'Hacer ejercicio', completada: false },
  { id: 3, descripcion: 'Terminar el proyecto', completada: true },
];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.get('/tareas/completas', (req, res) => {
  const tareasCompletas = tareas.filter((tarea) => tarea.completada);
  res.json(tareasCompletas);
});

app.get('/tareas/incompletas', (req, res) => {
  const tareasIncompletas = tareas.filter((tarea) => !tarea.completada);
  res.json(tareasIncompletas);
});

app.post('/tareas', (req, res) => {
  const nuevaTarea = req.body;
  nuevaTarea.id = tareas.length + 1;
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

app.delete('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const indice = tareas.findIndex((tarea) => tarea.id === tareaId);
  if (indice !== -1) {
    tareas.splice(indice, 1);
    res.json({ mensaje: 'Tarea eliminada' });
  } else {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
});

app.put('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tareaActualizada = req.body;
  const tareaExistente = tareas.find((tarea) => tarea.id === tareaId);

  if (!tareaExistente) {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  } else {
    tareaExistente.descripcion = tareaActualizada.descripcion;
    tareaExistente.completada = tareaActualizada.completada;
    res.json(tareaExistente);
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

