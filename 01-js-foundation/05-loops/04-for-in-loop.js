// for...in loop: Iterates over enumerable properties of an object.

const car = { brand: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(key + ": " + car[key]);
    //console.log(`${key}: ${car[key]}`); // Using template literals
}

/*
Output:
brand: Toyota
model: Camry
year: 2020
*/

/*
 Note: for...in is generally used for objects, when it's use in arrays,it gives the index of the array as a string, not the value. For example:
 
const fruits = ["apple", "banana", "cherry"];   
for (let index in fruits) {
    console.log(index); // Output: 0, 1, 2 (indices as strings)
    console.log(fruits[index]); // Output: apple, banana, cherry (values)
} 
*/