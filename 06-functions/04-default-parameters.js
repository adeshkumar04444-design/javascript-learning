/*
=========================================
Default Parameters
=========================================

Default Parameters were added in ES6.

They provide default values
when arguments are missing.
*/

// Example

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
  }

  greet();

  greet("Sachin");

  /*
  Output

  Hello Guest

  Hello Sachin
  */

  /*
  Multiple Default Parameters
  */

  function calculatePrice(price, tax = 18) {
    console.log(price + tax);
    }

    calculatePrice(100);

    calculatePrice(100, 28);

    /*
    Output

    118

    128
    */

    /*
    Benefits

    ✔ Cleaner code

    ✔ No need for if statements

    ✔ Prevent undefined values
    */