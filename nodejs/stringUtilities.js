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
    for (const item of data) {
        if (item % 2 === 0) {
            result.push(item);
        }
    }
    for (const item of result) {
        console.log(item);
    }
    for (const item of result) {
        result[result.indexOf(item)] = item * 2;
    }
    return result;
}

function example() {
    return;
}