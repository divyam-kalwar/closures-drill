
const cacheFunction = require("../projects/cacheFunction.cjs");

// Track how many times the callback executes
let callCount = 0;

function add(a, b) {
    callCount++;
    return a + b;
}

const cachedAdd = cacheFunction(add);

console.assert(cachedAdd(2, 3) === 5, "Test 1 failed");

console.assert(cachedAdd(2, 3) === 5, "Test 2 failed");

console.assert(cachedAdd(4, 5) === 9, "Test 3 failed");

console.assert(cachedAdd(2, 3) === 5, "Test 4 failed");

console.log("Callback count: "+callCount);
console.log("All tests passed!");
