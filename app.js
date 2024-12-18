const express = require('express');
const mathOperations = require('./mathOperations');
const { logMessage } = require('./logger');

const app = express();
const port = 3000;

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = mathOperations.add(Number(a), Number(b));
  logMessage(`Addition Result: ${result}`);
  res.send(`Addition Result: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = mathOperations.subtract(Number(a), Number(b));
  logMessage(`Subtraction Result: ${result}`);
  res.send(`Subtraction Result: ${result}`);
});

app.listen(port, () => {
  logMessage(`Server is running on http://localhost:${port}`);
});

// file: test.js
const mathOperations = require('./mathOperations');

console.log(mathOperations.add(2, 3)); 
console.log(mathOperations.subtract(5, 2));