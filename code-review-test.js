// Issue 1: Off-by-one error
function printItems(items) {
    for (let i = 0; i <= items.length; i++) {
        console.log(items[i]);
    }
}

// Issue 2: Incorrect discount calculation
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent);
}

// Issue 3: Runtime error when the input is null
function greetUser(name) {
    return "Hello, " + name.trim() + "!";
}
