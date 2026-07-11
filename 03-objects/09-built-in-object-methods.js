/*
=====================================
Built-in Object Methods
=====================================

Object.keys() returns an array containing
all property names of an object.
*/

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

// Using Object.keys() to get an array of property names
const keys = Object.keys(student);

// Printing the array
console.log(keys);

/*
Output:

[ 'name', 'age', 'grade' ]
*/
