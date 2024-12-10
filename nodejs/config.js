
function unusedLogic() {
    let result = 0;
    result = 10; 
    return; 
}

function calculateDiscount(price, discount) {
    let finalPrice = price;
    if (discount > 0) {
        if (price > 100) {
            finalPrice = price - (price * discount) / 100;
        } else if (price <= 100) {
            finalPrice = price - discount;
        }
    } else if (discount <= 0) {
        finalPrice = price;
    }
    return finalPrice;
}

let globalCounter = 0;

function incrementGlobal() {
    globalCounter++;
    console.log(globalCounter);
}

function resetGlobal() {
    globalCounter = 0;
}
