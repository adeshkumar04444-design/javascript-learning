/*
==========================================
Array-Like Objects
==========================================

Array-like objects:

1. Have numeric indexes.
2. Have a length property.
3. Are NOT actual arrays.

Array.from() converts them into real arrays.
*/

// Example of an array-like object
const arrayLikeObject = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// Accessing elements using numeric indexes
console.log(arrayLikeObject[0]); // Output: 'a'
console.log(arrayLikeObject[1]); // Output: 'b'
console.log(arrayLikeObject[2]); // Output: 'c'

// Converting array-like object to a real array
const realArray = Array.from(arrayLikeObject);
console.log(realArray); // Output: ['a', 'b', 'c']

// Example of a function that returns an array-like object
function getArrayLikeObject() {
  return {
    0: "x",
    1: "y",
    2: "z",
    length: 3,
  };
}

const returnedArrayLike = getArrayLikeObject();
console.log(returnedArrayLike[0]); // Output: 'x'
console.log(returnedArrayLike[1]); // Output: 'y'
console.log(returnedArrayLike[2]); // Output: 'z'

const convertedArray = Array.from(returnedArrayLike);
console.log(convertedArray); // Output: ['x', 'y', 'z']
