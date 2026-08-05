/*
=========================================
Arrow Functions
=========================================

Introduced in ES6.

Shorter syntax
than normal functions.

Syntax

(parameters) => {
    // code
    }
    */

    // Normal Function

    function multiply(a, b) {
      return a * b;
      }

      console.log(multiply(4, 5));

      // Arrow Function

      const multiplyArrow = (a, b) => {
        return a * b;
        };

        console.log(multiplyArrow(4, 5));

        /*
        Short Form

        If only one statement,

        return keyword is optional.
        */

        const cube = number => number ** 3;

        console.log(cube(3));

        /*
        Output

        20
        20
        27
        */

        /*
        Arrow Functions

        ✔ Short Syntax

        ✔ Lexical "this"

        ✖ Cannot be used
        as Constructors.
        */

        /*
        Interview Tip

        Use Arrow Functions

        for callbacks

        and small functions.

        Avoid using them
        as object methods.
        */