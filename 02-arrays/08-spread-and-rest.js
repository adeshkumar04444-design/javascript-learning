/** 
==========================================
Spread (...) vs Rest (...)
==========================================

Spread:
Expands an array into individual elements.

Rest:
Collects multiple elements into one array.
*/

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

// Rest Operator
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

// Spread operator can also be used to copy arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Rest operator can be used in function parameters to accept variable number of arguments
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}   

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22 