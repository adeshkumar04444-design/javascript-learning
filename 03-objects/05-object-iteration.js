/*
=====================================
Iterating Over an Object
=====================================

The for...in loop is used to iterate over object properties.
*/

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

// 'key' stores each property name
for (const key in student) {

  // student[key] returns the corresponding value
  //console.log(key, ":", student[key]);
  console.log(`${key}: ${student[key]}`);
}

/*
Output:
name: Alice
age: 20
grade: A
*/
