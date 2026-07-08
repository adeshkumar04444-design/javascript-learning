/*
let: Block-scoped. Can be re-assined but not re-declared within the same scope.
*/

let name = "Alice";
// let name = "Bob"; // Error: cannot redeclare block-scoped variable
name = "Charlie"; // Re-assignment is allowed
console.log(name); // Output: "Charlie"

if (true) {
    let blockScoped = "I'm inside a block";
    console.log(blockScoped); // Output: "I'm inside a block"
}
// console.log(blockScoped); // Error: blockScoped is not defined.