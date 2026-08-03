/*
=====================================
Prototypal Inheritance
=====================================

Objects can inherit properties
from another object using prototypes.
*/

const employee = {
  company: "Google",

  work() {
    console.log("Working...");
  },
};

const developer = {
  language: "JavaScript",
};

// Inherit from employee
Object.setPrototypeOf(developer, employee);

console.log(developer.language);
console.log(developer.company);

developer.work();

/*
Output

JavaScript
Google
Working...
*/

/*
Inheritance Diagram

developer
↓

employee
↓

Object.prototype
↓

null
*/
