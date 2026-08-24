/*
=========================================
Synchronous vs Asynchronous JavaScript
=========================================

JavaScript is a single-threaded language.

Synchronous:
- Code executes one line at a time.
- Next line waits for the previous line to finish.

Asynchronous:
- Some operations can be started and completed later.
- JavaScript can continue executing other code
  while waiting for the asynchronous operation.
  */

  // ========================================
  // 1. Synchronous Example
  // ========================================

  console.log("Step 1");

  console.log("Step 2");

  console.log("Step 3");

  /*
  Output:

  Step 1
  Step 2
  Step 3

  Execution happens line by line.
  */

  // ========================================
  // 2. Asynchronous Example
  // ========================================

  console.log("Start");

  setTimeout(() => {
    console.log("Async operation completed");
    }, 2000);

    console.log("End");

    /*
    Output:

    Start
    End
    Async operation completed

    Why?

    setTimeout() starts a timer.

    JavaScript does NOT wait for 2 seconds.

    It continues executing the next line.

    After 2 seconds, the callback is executed.
    */

    /*
    Execution Flow

    console.log("Start")
            ↓
    setTimeout() starts timer
            ↓
    console.log("End")
            ↓
    Timer completes
            ↓
    Callback executes
    */

    /*
    Important:

    Asynchronous JavaScript does NOT mean
    JavaScript executes multiple JavaScript
    instructions simultaneously.

    JavaScript itself has one main thread.

    The browser/runtime provides mechanisms
    for handling asynchronous operations.
    */