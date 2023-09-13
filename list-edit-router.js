const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Nueva tarea creada');
});

router.delete('/:id', (req, res) => {
  res.send('Tarea eliminada');
});

router.put('/:id', (req, res) => {
  res.send('Tarea actualizada');
});

module.exports = router;