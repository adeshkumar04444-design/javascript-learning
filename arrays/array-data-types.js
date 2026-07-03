// 01. Arrays can store different data types together.

let data = ["Adesh", 20, true, null, undefined];

console.log(data); // Output: ["Adesh", 20, true, null, undefined]

// 02. Array can store objects as well.

let student = [
  {
    name: "Adesh",
    age: 20,
  },
  {
    name: "Rahul",
    age: 22,
  },
];

console.log(student); /** Output: [
    { name: "Adesh", age: 20 },
    { name: "Rahul", age: 22 }
   ] */

// 03. Array can store other arrays (multidimensional arrays).

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix); /** Output: [
     [1, 2],
     [3, 4],
     [5, 6]
   ] */

// Accessing elements in a multidimensional array

console.log(matrix[1][0]);

// Output: 3
