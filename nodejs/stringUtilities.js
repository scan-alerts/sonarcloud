
const unusedVar = 42;
const magicNumber = 100;

function calculateSum(a, b, c, d) {
    return a + b + c + d; 
}

function processData() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 3; k++) {
                console.log(i * j * k); 
            }
        }
    }
}

function generateReport(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            result.push(data[i]);
        }
    }
    for (let j = 0; j < result.length; j++) {
        console.log(result[j]);
    }
    for (let k = 0; k < result.length; k++) {
        result[k] = result[k] * 2;
    }
    return result;
}

function example() {
    return;
    console.log("This will never run.");
}
