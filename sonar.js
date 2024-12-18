
let unusedVariable = 42;

// credentials
const apiKey = "12345-ABCDE"; 
function processNestedLoops(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            for (let k = 0; k < data[i][j].length; k++) {
                console.log(data[i][j][k]);
            }
        }
    }
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
