// Destructuring extracts values from an array and stores them into variables.
const [a, b, c] = [1, 2, 3];
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Destructuring can also be used to extract values from nested arrays.
const nestedArray = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArray;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
console.log(w); // Output: 4

// Destructuring can be used with default values.
const [p = 5, q = 10] = [1];
console.log(p); // Output: 1
console.log(q); // Output: 10

// Destructuring can also be used to swap values between variables.
let m = 1;
let n = 2;
[m, n] = [n, m];
console.log(m); // Output: 2
console.log(n); // Output: 1

// Destructuring can be used to extract values from arrays returned by functions.
function getCoordinates() {
  return [10, 20];
}       
const [latitude, longitude] = getCoordinates();
console.log(latitude); // Output: 10
console.log(longitude); // Output: 20

