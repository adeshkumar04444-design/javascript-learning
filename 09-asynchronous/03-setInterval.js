/*
=========================================
setInterval()
=========================================

setInterval() repeatedly executes
a function after every specified interval.

Syntax:

setInterval(callback, interval);
*/

// ========================================
// Basic Example
// ========================================

let count = 1;

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);

    count++;

      // Stop after 5 executions
        if (count > 5) {
            clearInterval(intervalId);
              }
              }, 1000);

  /*
  Output:

  Count: 1
  Count: 2
  Count: 3
  Count: 4
  Count: 5

  The callback runs approximately
  every 1 second.
  */

  // ========================================
  // clearInterval()
  // ========================================

  /*
  clearInterval() stops a running interval.

  Example:

  const id = setInterval(() => {
    console.log("Running...");
    }, 1000);

    clearInterval(id);

    */

    // ========================================
    // Practical Example
    // ========================================

    let seconds = 0;

    const timer = setInterval(() => {
      seconds++;

        console.log(`Timer: ${seconds} seconds`);

          if (seconds === 5) {
          clearInterval(timer);
          console.log("Timer stopped.");
            }
            }, 1000);

    /*
    This creates a simple timer.

    After 5 seconds:

    Timer stopped.
    */

    /*
    setTimeout vs setInterval

    setTimeout:
    Runs ONCE.

    setInterval:
    Runs REPEATEDLY until stopped.

    setTimeout()
     ↓
    Once

    setInterval()
      ↓
    Repeat
    */