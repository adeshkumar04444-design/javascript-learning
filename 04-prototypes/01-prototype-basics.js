/*
=====================================
JavaScript Prototype Basics
=====================================

Definition:
Every JavaScript object has a hidden property called [[Prototype]].

This prototype allows objects to inherit properties
and methods from another object.

In JavaScript:
Object -----> Prototype -----> Prototype -----> null

This is called the Prototype Chain.
*/

// Creating an object
const person = {
  name: "Sachin",

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

person.greet();

// Output:
// Hello, I'm Sachin

/*
Even though "person" only contains name and greet(),
it can also use methods like:

person.toString()
person.hasOwnProperty()

Why?

Because these methods come from Object.prototype.
*/

console.log(person.hasOwnProperty("name")); // true
console.log(person.toString());

/*
Prototype Relationship

person
   |
   v
Object.prototype
   |
   v
null
*/

// Checking Prototype

console.log(Object.getPrototypeOf(person));

/*
Important Points

✔ Every object has a prototype.
✔ Prototype is used for inheritance.
✔ Most built-in methods come from Object.prototype.
✔ Prototype helps avoid code duplication.
*/
  