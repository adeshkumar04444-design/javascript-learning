// Nested Array: Nested arrays are arrays that contain other arrays as elements.

const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nestedArrays); /** Output: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ] */

// Access an entire row
console.log(nestedArrays[1]); // Output: [4, 5, 6]

// Access an individual element
console.log(nestedArrays[2][1]); // Output: 8

// Modifying an element in a nested array
nestedArrays[0][2] = 10;
console.log(nestedArrays); /** Output: [
    [1, 2, 10],
    [4, 5, 6],
    [7, 8, 9]
   ] */

// Adding a new row to the nested array
nestedArrays.push([11, 12, 13]);
console.log(nestedArrays); /** Output: [        
    [1, 2, 10],
    [4, 5, 6],
    [7, 8, 9],
    [11, 12, 13]
   ] */

// Removing a row from the nested array
nestedArrays.pop();
console.log(nestedArrays); /** Output: [
    [1, 2, 10],
    [4, 5, 6],
    [7, 8, 9]
   ] */

// Iterating through a nested array
for (const row of nestedArrays) {
  for (const element of row) {
    console.log(element);
  }
} /** Output:
    1
    2
    10
    4
    5
    6
    7
    8
    9
 */
