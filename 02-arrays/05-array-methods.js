// JavaScript provides many built-in methods to create, modify, search, transform, and iterate over arrays.

// 1. push(): Adds one or more elements to the end of an array.

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// 2. pop(): Removes the last element from an array.

let vegetables = ["Carrot", "Broccoli", "Spinach"];
vegetables.pop();
console.log(vegetables); // Output: ["Carrot", "Broccoli"]

// 3. shift(): Removes the first element from an array.

let colors = ["Red", "Green", "Blue"];
colors.shift();
console.log(colors); // Output: ["Green", "Blue"]

// 4. unshift(): Adds one or more elements to the beginning of an array.

let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4]

// 5. splice(start, deleteCount, item1, item2, ...): Adds/removes elements from an array at any position.

let animals = ["Dog", "Cat", "Elephant"];
animals.splice(1, 2, "Lion", "Tiger");
console.log(animals); // Output: ["Dog", "Lion", "Tiger"]
/**
 splice() has three parameters:
  1. The index at which to start changing the array.
  2. The number of elements to remove (0 means no elements will be removed).
  3. The elements to add to the array (optional).
 */

// 6. slice(start, end): Returns a shallow copy of a portion of an array into a new array object.

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];
let citrus = fruits2.slice(2, 4);
console.log(citrus); // Output: ["Mango", "Orange"]
/**
slice() has two parameters:
    1. The index at which to start extracting elements.
    2. The index at which to stop extracting elements (exclusive).
 */

// 7. concat(): Merges two or more arrays into a new array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let merged = array1.concat(array2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]

// Note: indexOf(), lastIndexOf(), includes(): Search for elements in an array.

// 8. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

let fruits3 = ["Apple", "Banana", "Mango", "Banana"];
console.log(fruits3.indexOf("Banana")); // Output: 1
console.log(fruits3.indexOf("Grapes")); // Output: -1

// 9. lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

let fruits4 = ["Apple", "Banana", "Mango", "Banana"];
console.log(fruits4.lastIndexOf("Banana")); // Output: 3
console.log(fruits4.lastIndexOf("Grapes")); // Output: -1

// 10. includes(): Checks if an array contains a specific element.

let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.includes(3)); // Output: true
console.log(numbers2.includes(6)); // Output: false

// Note: forEach(), map(), filter(), reduce(): Iterate and transform arrays.

// 11. forEach(): Executes a provided function once for each array element.
let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(function (num) {
  console.log(num);
}); /** Output:
          1
          2
          3
          4
          5  */

// 12. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers4 = [1, 2, 3, 4, 5];
let squared = numbers4.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
// You can also use a regular function instead of an ar row function:
let doubled = numbers4.map(function (num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 13. filter(): Creates a new array with all elements that pass the test implemented by the provided function.

let numbers5 = [1, 2, 3, 4, 5];
let evenNumbers = numbers5.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// 14. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

let numbers6 = [1, 2, 3, 4, 5];
let sum = numbers6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Note: find(), findIndex(): Search for elements in an array based on a condition.

// 15. find(): Returns the value of the first element in the array that satisfies the provided testing function.
let numbers7 = [1, 2, 3, 4, 5];
let firstEven = numbers7.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2

// 16. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function, or -1 if it is not found.
let numbers8 = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers8.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1


// Note: sort(), reverse(): Sort and reverse arrays.

// 17. sort(): Sorts the elements of an array in place and returns the sorted array.
let fruits5 = ["Banana", "Apple", "Mango", "Orange"];
fruits5.sort();
console.log(fruits5); // Output: ["Apple", "Banana", "Mango", "Orange"]

// 18. reverse(): Reverses the order of the elements of an array in place and returns the reversed array.
let numbers9 = [1, 2, 3, 4, 5];
numbers9.reverse();
console.log(numbers9); // Output: [5, 4, 3, 2, 1]

