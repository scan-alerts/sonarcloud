function unusedLogic() {
    // Remove the declaration of the unused 'result' variable
}

function calculateDiscount(price, discount) {
    let finalPrice = price;
    if (discount > 0) {
        if (price > 100) {
            finalPrice = price - (price * discount) / 100;
        } else {
            finalPrice = price - discount;
        }
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