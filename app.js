const express = require('express');
const { add: addFunction, subtract: subtractFunction } = require('./mathOperations');
const { logMessage } = require('./logger');

const app = express();
const port = 3000;

app.disable("x-powered-by");

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = addFunction(Number(a), Number(b));
  logMessage(`Addition Result: ${result}`);
  res.send(`Addition Result: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = subtractFunction(Number(a), Number(b));
  logMessage(`Subtraction Result: ${result}`);
  res.send(`Subtraction Result: ${result}`);
});

app.listen(port, () => {
  logMessage(`Server is running on http://localhost:${port}`);
});

// file: test.js
console.log(addFunction(2, 3)); 
console.log(subtractFunction(5, 2));

// Test Case
console.log(addFunction(10, 5));