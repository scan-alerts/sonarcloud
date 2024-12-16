function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b; 
}

// Exporting the functions as an object
module.exports = { max, min };