/*
=========================================
JavaScript Function Declaration
=========================================

Definition:

A Function Declaration is the most common
way to create a function in JavaScript.

It is also called a Named Function because
it has its own name.

Syntax:

function functionName(parameters) {
    // code
    }

    */

    // Function Declaration

    function greet(name) {
      console.log(`Hello, ${name}!`);
      }

      // Calling the function

      greet("Sachin");
      greet("Rahul");

      /*
      Output

      Hello, Sachin!
      Hello, Rahul!
      */

      /*
      Explanation

      Step 1

      Function is created.

      ↓

      Step 2

      Function is called.

      ↓

      Step 3

      Argument "Sachin"

      ↓

      Parameter "name"

      ↓

      Output is printed.
      */

      /*
      Function Returning Value
      */

      function add(a, b) {
        return a + b;
        }

        const result = add(10, 20);

        console.log(result);

        /*
        Output

        30
        */

        /*
        Advantages

        ✔ Easy to read
        ✔ Reusable
        ✔ Hoisted
        */

        /*
        Hoisting Example

        Works even before declaration.
        */

        sayHello();

        function sayHello() {
          console.log("Function Declaration is Hoisted");
          }