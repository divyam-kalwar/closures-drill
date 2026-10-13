const limitFunctionCallCount = require("../projects/limitFunctionCallCount.cjs");

function multiply(a, b) {
    return a * b;
}

const limitedMultiply = limitFunctionCallCount(multiply, 2);

console.log(limitedMultiply(2, 3));
console.log(limitedMultiply(4, 5));
console.log(limitedMultiply(6, 7));