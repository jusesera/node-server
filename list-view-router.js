const express = require('express');
const router = express.Router();

router.get('/completas', (req, res) => {
  res.send('Lista de tareas completas');
});

router.get('/incompletas', (req, res) => {
  res.send('Lista de tareas incompletas');
});

module.exports = router;