const fs = require('fs');
const utils = require('./utils');
const config = require('./config');

// Read and process a non-existent file (Error handling issue)
fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
    if (err) console.log('File not found'); // Generic error message, issue
    console.log(data);
});

// Call a deprecated function (Code smell)
utils.deprecatedFunction();

// Incorrect function use (Bug)
utils.addNumbers(5, "10"); // Passing string instead of number

// Hardcoded sensitive information (Security vulnerability)
console.log("API Key:", config.API_KEY);

// Infinite loop (Bug)
while (true) {
    console.log("This loop runs forever"); // No exit condition
}
