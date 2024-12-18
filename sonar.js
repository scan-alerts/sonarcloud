let unusedVariable = 42;

// credentials
const apiKey = "12345-ABCDE"; 

// Function with consistent return types
function checkValue(value) {
    if (value > 10) {
        return "Greater than 10"; 
    }
    return "Not greater than 10";
}

function inconsistentReturn(value) {
    if (value > 10) {
        return "Value is greater than 10";
    } else {
        return "Value is not greater than 10"; 
    }
}

function unusedParameters(a, b, c) {
    return a + b; 
}

function infiniteLoop() {
    for(let i=0; i<10; i++) {
        console.log(i); 
    }
}


function evalExample(userInput) {
if(/^[A-Za-z0-9]*$/.test(userInput)) {
    console.log(userInput); 
}
}

function deprecatedMethod() {
    document.body.innerHTML = "This is not recommended!";
}
processNestedLoops([[['a', 'b'], ['c', 'd']]]);
duplicateCodeExample1();
missingSemicolon();