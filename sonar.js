
let unusedVariable = 42;

// credentials
const apiKey = "12345-ABCDE"; 
// Function with inconsistent return types
function checkValue(value) {
    if (value > 10) {
        return "Greater than 10"; // Returns a string
    }
    return 0; // Returns a number, inconsistent type
}

function inconsistentReturn(value) {
    if (value > 10) {
        return "Value is greater than 10";
    } else {
        return 0; 
    }
}

function unusedParameters(a, b, c) {
    return a + b; 
}

function infiniteLoop() {
    let i = 0;
    while (true) {
        i++; 
    }
}

function evalExample(userInput) {
    eval(userInput); 
}
function deprecatedMethod() {
    document.write("This is not recommended!");
}
processNestedLoops([[['a', 'b'], ['c', 'd']]]);
duplicateCodeExample1();
missingSemicolon();
