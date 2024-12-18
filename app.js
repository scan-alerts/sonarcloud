// Firstly, remove line 28 as the 'add' and 'subtract' functions are already defined at the top

// file: app.js
const express = require('express');
const { add, subtract } = require('./mathOperations');
const { logMessage } = require('./logger');

const app = express();
const port = 3000;

app.disable('x-powered-by');  // disable express app from showing version information

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  if (!isNaN(a) && !isNaN(b)) {
    const result = add(Number(a), Number(b));
    logMessage(`Addition Result: ${result}`);
    res.send(`Addition Result: ${result}`);
  } else {
    res.status(400).send("Invalid Inputs");
  }  
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!isNaN(a) && !isNaN(b)) {
    const result = subtract(Number(a), Number(b));
    logMessage(`Subtraction Result: ${result}`)
    res.send(`Subtraction Result: ${result}`);
  } else {
    res.status(400).send("Invalid Inputs");
  }  
});

app.listen(port, () => {
  logMessage(`Server is running on http://localhost:${port}`);
});

// file: test.js
const { add, subtract } = require('./mathOperations');

console.log(add(2, 3)); 
console.log(subtract(5, 2));