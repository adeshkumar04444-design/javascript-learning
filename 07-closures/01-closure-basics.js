/*
=====================================
JavaScript Closures
=====================================

Definition:

A Closure is created when an inner function
remembers and can access the variables
of its outer function, even after
the outer function has finished executing.

In simple words:

"A function remembers the environment
where it was created."

=====================================
Example
=====================================
*/

function outerFunction() {
  // Local variable
    let message = "Hello Sachin!";

      // Inner function
        function innerFunction() {
            console.log(message);
              }

                // Returning the inner function
                  return innerFunction;
                  }

                  // outerFunction() execution finishes
                  const greet = outerFunction();

                  // Still able to access "message"
                  greet();

                  /*
                  Output

                  Hello Sachin!

                  =====================================

                  Explanation

                  Step 1:
                  outerFunction() is called.

                  Step 2:
                  message variable is created.

                  Step 3:
                  innerFunction() is returned.

                  Step 4:
                  Normally local variables are destroyed.

                  Step 5:
                  But because innerFunction still needs
                  message,

                  JavaScript keeps it alive.

                  This is called a Closure.

                  =====================================

                  Visual

                  greet
                     ↓
                     innerFunction
                        ↓
                        message = "Hello Sachin!"

                        =====================================
                        */