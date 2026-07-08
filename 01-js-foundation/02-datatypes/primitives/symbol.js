// Symbol: Represents a unique identifier. Symbols are immutable and can be used as keys for object properties to ensure uniqueness.

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // Output: false  
console.log(typeof id1); // Output: "symbol"