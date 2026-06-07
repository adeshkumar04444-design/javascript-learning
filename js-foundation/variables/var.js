/*
var: Oldest way to declare variables. Function-scoped, can be re-declared and re-assigned.
*/

var greeting = "Hello";
var greeting = "Hi";    // Re-declaration is allowed
var greeting = "Hey";   // Re-assignment is allowed
console.log(greeting);  // Output: "Hey"