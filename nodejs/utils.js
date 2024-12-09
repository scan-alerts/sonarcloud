// Unused variable (Code smell)
const unusedVariable = 42;

// Function missing input validation (Security issue)
function addNumbers(a, b) {
    return a + b; // No type checking
}

// Deprecated function (Code smell)
function deprecatedFunction() {
    console.log("This is a deprecated function");
}

// Unhandled promise rejection (Bug)
function fetchData() {
    return Promise.reject(new Error("Fetch error"));
}

module.exports = {
    addNumbers,
    deprecatedFunction,
    fetchData
};