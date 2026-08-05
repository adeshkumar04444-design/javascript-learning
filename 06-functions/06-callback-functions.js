/*
=========================================
Callback Functions
=========================================

Definition

A Callback Function

is a function

passed as an argument

to another function.
*/

// Callback

function greet(name) {
  console.log(`Hello ${name}`);
  }

  function processUser(callback) {

    console.log("Processing...");

      callback("Sachin");

      }

      processUser(greet);

      /*
      Output

      Processing...

      Hello Sachin
      */

      /*
      Anonymous Callback
      */

      setTimeout(function(){

          console.log("Executed after 2 seconds");

          },2000);

          /*
          Arrow Callback
          */

          setTimeout(()=>{

              console.log("Arrow Callback");

              },3000);

              /*
              Real Life Examples

              ✔ setTimeout()

              ✔ addEventListener()

              ✔ Promise

              ✔ Fetch API
              */