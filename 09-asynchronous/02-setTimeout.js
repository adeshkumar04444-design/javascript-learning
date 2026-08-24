/*
=========================================
setTimeout()
=========================================

setTimeout() executes a function
after a specified minimum delay.

Syntax:

setTimeout(callback, delay);
*/

// ========================================
// Basic Example
// ========================================

console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
  }, 2000);

  console.log("End");

  /*
  Output:

  Start
  End
  Hello after 2 seconds
  */

  // ========================================
  // Important: Delay is NOT guaranteed
  // exact execution time.
  // ========================================

  setTimeout(() => {
    console.log("This callback is ready");
    }, 0);

    console.log("This runs first");

    /*
    Output:

    This runs first
    This callback is ready

    Even with 0 milliseconds,
    the callback does not execute immediately.

    It is placed into the task queue
    and waits until the call stack is available.
    */

    // ========================================
    // Passing Arguments
    // ========================================

    function greet(name) {
      console.log(`Hello, ${name}!`);
      }

      setTimeout(greet, 1000, "Sachin");

      /*
      After approximately 1 second:

      Hello, Sachin!
      */

      // ========================================
      // Cancelling setTimeout()
      // ========================================

      const timerId = setTimeout(() => {
        console.log("This will NOT execute");
        }, 3000);

        // Cancel the timer
        clearTimeout(timerId);

        /*
        Because clearTimeout() was called,
        the callback will not execute.
        */

        /*
        Important Points

        ✔ setTimeout() is asynchronous.
        ✔ Delay is a minimum delay, not a guarantee.
        ✔ Returns a timer ID.
        ✔ clearTimeout() cancels the timer.
        */