/*
=====================================
Class and Prototype
=====================================

JavaScript classes are built
on top of prototypes.

Classes are just syntactic sugar.
*/

class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const s1 = new Student("Sachin");
const s2 = new Student("Rahul");

s1.greet();
s2.greet();

/*
Methods are NOT copied into every object.

Instead,

they are stored inside:

Student.prototype
*/

console.log(Student.prototype);

console.log(s1.__proto__ === Student.prototype); // true

/*
Structure

s1
↓

Student.prototype
↓

Object.prototype
↓

null
*/
