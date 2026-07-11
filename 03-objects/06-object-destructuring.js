/*
=====================================
Object Destructuring
=====================================

Destructuring extracts object properties into variables.
*/

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

// Destructuring the object (Creating variables from object properties)
const { name, age } = student;

// Printing the variables
console.log(name);
console.log(age);

/*
Output:

Alice   
20  
*/
