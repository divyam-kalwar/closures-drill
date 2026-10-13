const counterFactory = require("../projects/counterFactory.cjs");

const counter = counterFactory();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());