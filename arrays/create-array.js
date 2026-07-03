// Array: Creating an array in JavaScript.

// Method 1: Using Array Literal
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]


// Method 2: Using Array Constructor
let vegetables = new Array("Carrot", "Broccoli", "Spinach");
console.log(vegetables); // Output: ["Carrot", "Broccoli", "Spinach"]


// Method 3: Empty Array and then adding elements
let colors = [];
colors.push("Red");
colors.push("Green");
colors.push("Blue");
console.log(colors); // Output: ["Red", "Green", "Blue"]


// Method 4: Using Array.of()
let numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]


// Method 5: Using Array.from()
let string = "Hello";
let charArray = Array.from(string);
console.log(charArray); // Output: ["H", "e", "l", "l", "o"]



/**
Difference between Array.of() and Array() constructor?
  1. Array(3) creates an array with a length of 3 (empty slots).
  2. Array.of(3) creates an array containing the single element 3.
 */