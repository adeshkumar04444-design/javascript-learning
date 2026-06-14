/*
block-scoped. Cannot be re-declared or re-assigned. Must be initialized at the time of declaration.
*/

const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable.
// const GRAVITY; // Error: Missing initializer in const declaration.

const person = { name: "David" };
person.name = "Eve"; // Allowed: modifying properties of a const object declared with const is fine.
// person = { name: "Frank" }; // Error: Assignment to constant variable.

console.log(person); // Output: { name: "Eve" }
