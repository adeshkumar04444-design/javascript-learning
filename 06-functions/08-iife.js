/*
=========================================
IIFE
Immediately Invoked Function Expression
=========================================

Definition

An IIFE is a function

that executes immediately

after it is created.

Syntax

(function(){

})();

*/

/*
-----------------------------------------
Example 1
Basic IIFE
-----------------------------------------
*/

(function () {

  console.log("IIFE Executed!");

  })();

  /*
  Output

  IIFE Executed!
  */

  /*
  Explanation

  Step 1

  Function is created.

  ↓

  Step 2

  () immediately executes it.
  */

  /*
  -----------------------------------------
  Example 2
  IIFE with Parameters
  -----------------------------------------
  */

  (function(name){

    console.log(`Hello ${name}`);

    })("Sachin");

    /*
    Output

    Hello Sachin
    */

    /*
    -----------------------------------------
    Example 3
    Arrow Function IIFE
    -----------------------------------------
    */

    (() => {

      console.log("Arrow Function IIFE");

      })();

      /*
      Output

      Arrow Function IIFE
      */

      /*
      -----------------------------------------
      Example 4
      Private Variables
      -----------------------------------------
      */

      const counter = (function(){

        let count = 0;

          return {

              increment(){

                    count++;

                          console.log(count);

                              }

                                };

                                })();

                                counter.increment();

                                counter.increment();

                                counter.increment();

                                /*
                                Output

                                1

                                2

                                3
                                */

                                /*
                                Explanation

                                Variable "count"

                                cannot be accessed

                                outside the IIFE.

                                This creates

                                private scope.
                                */

                                /*
                                Trying this

                                console.log(count);

                                ReferenceError

                                because

                                count

                                is private.
                                */

                                /*
                                Why Use IIFE?

                                ✔ Avoid Global Variables

                                ✔ Private Scope

                                ✔ Execute Code Immediately

                                ✔ Old JavaScript Modules
                                */

                                /*
                                Interview Tip

                                Nowadays,

                                ES Modules have replaced

                                most IIFE use cases.

                                However,

                                IIFE is still a popular

                                JavaScript interview question.
                                */