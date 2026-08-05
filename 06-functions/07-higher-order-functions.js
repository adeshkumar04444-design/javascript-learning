/*
=========================================
Higher-Order Functions (HOF)
=========================================

Definition

A Higher-Order Function is a function that:

✔ Takes one or more functions as arguments

OR

✔ Returns another function.

Functions in JavaScript are
First-Class Citizens.

That means functions can be

• Stored in variables
• Passed as arguments
• Returned from another function
*/

/*
-----------------------------------------
Example 1
Passing a Function as an Argument
-----------------------------------------
*/

function greet(name) {
  console.log(`Hello, ${name}`);
  }

  function processUser(callback) {
    console.log("Processing user...");
      callback("Sachin");
      }

      processUser(greet);

      /*
      Output

      Processing user...
      Hello, Sachin
      */

      /*
      Explanation

      processUser()

      ↓

      Receives greet()

      ↓

      Calls greet("Sachin")

      ↓

      Output
      */

      /*
      -----------------------------------------
      Example 2
      Returning a Function
      -----------------------------------------
      */

      function multiplier(factor) {
        return function(number) {
            return number * factor;
              };
              }

              const double = multiplier(2);

              const triple = multiplier(3);

              console.log(double(10));

              console.log(triple(10));

              /*
              Output

              20

              30
              */

              /*
              -----------------------------------------
              Example 3
              Built-in Higher Order Functions
              -----------------------------------------
              */

              const numbers = [1,2,3,4,5];

              /*
              map()

              Creates a NEW array.
              */

              const squares = numbers.map(number => number * number);

              console.log(squares);

              /*
              Output

              [1,4,9,16,25]
              */

              /*
              filter()

              Returns matching elements.
              */

              const evenNumbers = numbers.filter(number => number % 2 === 0);

              console.log(evenNumbers);

              /*
              Output

              [2,4]
              */

              /*
              reduce()

              Reduces array to a single value.
              */

              const total = numbers.reduce((sum, number) => sum + number,0);

              console.log(total);

              /*
              Output

              15
              */

              /*
              Summary

              ✔ Accepts Function

              ✔ Returns Function

              ✔ map()

              ✔ filter()

              ✔ reduce()

              are Higher-Order Functions.
              */

              /*
              Interview Tip

              Every callback function

              is NOT

              a Higher-Order Function.

              But

              every Higher-Order Function

              works with functions.
              */