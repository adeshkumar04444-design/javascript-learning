// Shorter syntax, no this binding, can not be used as constructors.

const add = (a, b) => a + b;
console.log(add(5, 3));  // Output: 8

const multiply = (a, b) => {
    // Multi-line arrow function needs return
    return a * b;
};
console.log(multiply(4, 2));  //Output: 8


// Useful for concise functions.