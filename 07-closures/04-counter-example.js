/*
=====================================
Counter Example using Closure
=====================================

One of the most famous examples
of Closure.
*/

function counter() {

  let count = 0;

    return function () {

        count++;

            console.log("Current Count:", count);

              };

              }

              const increment = counter();

              increment();

              increment();

              increment();

              /*
              Output

              Current Count: 1
              Current Count: 2
              Current Count: 3

              =====================================

              count variable survives
              because of Closure.

              Every call updates
              the same variable.
              */