/*
=====================================
Practical Example of Closures
=====================================

One of the most common real-world uses
of closures is creating reusable
functions with different configurations.

This is called a Function Factory.

=====================================
Example 1
Creating Tax Calculators
=====================================
*/

function createTaxCalculator(taxRate) {

  // taxRate is remembered by the returned function
    return function (amount) {

        return amount + (amount * taxRate);

          };

          }

          // Create different calculators
          const indiaTax = createTaxCalculator(0.18);

          const usaTax = createTaxCalculator(0.08);

          console.log("India Price:", indiaTax(1000));

          console.log("USA Price:", usaTax(1000));

          /*
          Output

          India Price: 1180
          USA Price: 1080

          =====================================

          Explanation

          createTaxCalculator(0.18)

          ↓

          Returns a new function

          ↓

          That function remembers

          taxRate = 0.18

          Even after createTaxCalculator()
          has finished executing.

          =====================================
          */


          /*
          =====================================
          Example 2
          Greeting Generator
          =====================================
          */

          function createGreeting(message) {

            return function (name) {

                console.log(`${message}, ${name}!`);

                  };

                  }

                  const sayHello = createGreeting("Hello");

                  const sayWelcome = createGreeting("Welcome");

                  sayHello("Sachin");

                  sayWelcome("Rahul");

                  /*
                  Output

                  Hello, Sachin!
                  Welcome, Rahul!

                  Each returned function remembers
                  its own "message" variable.
                  */


                  /*
                  =====================================
                  Example 3
                  Discount Calculator
                  =====================================
                  */

                  function createDiscount(discount) {

                    return function (price) {

                        return price - (price * discount);

                          };

                          }

                          const studentDiscount = createDiscount(0.20);

                          const employeeDiscount = createDiscount(0.10);

                          console.log(studentDiscount(5000));

                          console.log(employeeDiscount(5000));

                          /*
                          Output

                          4000
                          4500

                          =====================================

                          Each discount function stores
                          its own discount value.

                          This is possible because
                          of Closures.
                          */


                          /*
                          =====================================
                          Real-World Uses of Closures
                          =====================================

                          ✔ User Authentication

                          ✔ Shopping Cart

                          ✔ Discount Calculators

                          ✔ Tax Calculators

                          ✔ Counters

                          ✔ Timers

                          ✔ Event Listeners

                          ✔ Module Pattern

                          ✔ Debouncing

                          ✔ Throttling

                          ✔ React Hooks

                          ✔ API Wrappers

                          =====================================

                          Interview Tip

                          Closure is NOT only an interview topic.

                          It is used every day in modern JavaScript,
                          React, Node.js, and many libraries.

                          Whenever a function remembers variables
                          from its outer scope,

                          a Closure is created.

                          =====================================
                          */