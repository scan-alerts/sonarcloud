function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// Test case
console.log(add(2, 3)); // Expected output: 5
console.log(subtract(5, 2)); // Expected output: 3