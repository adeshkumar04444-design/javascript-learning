/*
=====================================
Object.create()
=====================================

Object.create() creates a new object
using another object as its prototype.
*/

const student = {
  college: "ABC University",

  study() {
    console.log("Studying...");
  },
};

// Create new object
const sachin = Object.create(student);

sachin.name = "Sachin";

console.log(sachin.name);
console.log(sachin.college);

sachin.study();

/*
Prototype Structure

sachin
↓

student
↓

Object.prototype
↓

null
*/

console.log(Object.getPrototypeOf(sachin));
