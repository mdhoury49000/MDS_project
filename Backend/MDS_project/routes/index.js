// routes/index.js

const express = require('express');
const router = express.Router();

// Utilisation correcte : spécifiez une fonction de rappel en tant que deuxième argument
router.get('/', (req, res) => {
  res.send('Hello, this is the main route!');
});

module.exports = router;
