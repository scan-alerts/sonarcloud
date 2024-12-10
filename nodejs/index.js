
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function duplicateLogic(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function anotherDuplicateLogic(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

// Hardcoded configurations
const config = {
    url: "http://localhost:3000",
    timeout: 5000,
};

function fetchData() {
    console.log(`Fetching data from ${config.url} with timeout ${config.timeout}`);
}
