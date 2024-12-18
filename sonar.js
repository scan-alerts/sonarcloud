let unusedVariable = 42;

// credentials
const apiKey = "12345-ABCDE"; 

// Function with consistent return types
function checkValue(value) {
    if (value > 10) {
        return 1; 
    }
    return 0;
}

function consistentReturn(value) {
    if (value > 10) {
        return 1;
    } else {
        return 0; 
    }
}

function unusedParameters(a, b, c) {
    return a + b; 
}

function infiniteLoop() {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
}

function evalExample(userInput) {
    let cleanedUserInput = JSON.parse(userInput);
    console.log(cleanedUserInput); 
}

function deprecatedMethod() {
    console.log("This is not recommended!");
}
processNestedLoops([[['a', 'b'], ['c', 'd']]]);
duplicateCodeExample1();
missingSemicolon();