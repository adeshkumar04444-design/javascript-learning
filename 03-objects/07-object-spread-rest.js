/*
=====================================
Spread Operator
=====================================

The spread operator (...) copies all properties
from one object into another.
*/

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

// Creating a copy of the object
const copystudent = {
  ...student,

  // Adding a new property
  city: "New York",
};

// Printing the copied object
console.log(copystudent);

/*
Output:
{
  name: 'Alice',
  age: 20,
  grade: 'A',
  city: 'New York'
}
*/
