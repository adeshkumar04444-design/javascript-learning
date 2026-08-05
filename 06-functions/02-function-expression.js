/*
=========================================
Function Expression
=========================================

Definition

A Function Expression stores a function
inside a variable.

Unlike Function Declaration,

it is NOT hoisted.
*/

// Anonymous Function Expression

const greet = function(name) {
  console.log(`Hello ${name}`);
  };

  greet("Sachin");

  /*
  Output

  Hello Sachin
  */

  /*
  Named Function Expression
  */

  const square = function calculateSquare(number) {
    return number * number;
    };

    console.log(square(5));

    /*
    Output

    25
    */

    /*
    Trying before declaration

    greet();

    ReferenceError

    because

    Function Expressions
    are NOT hoisted.
    */

    /*
    Difference

    Function Declaration

    ✔ Hoisted

    Function Expression

    ✖ Not Hoisted
    */