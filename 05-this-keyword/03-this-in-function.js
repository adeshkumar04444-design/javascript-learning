/*
=========================================
"this" Inside a Regular Function
=========================================

Regular functions behave differently.

Browser (Non-Strict Mode)

this ---> window

Strict Mode

this ---> undefined
*/

function showThis() {
  console.log(this);
  }

  showThis();

  /*
  Enable Strict Mode
  */

  "use strict";

  function display() {
    console.log(this);
    }

    display();

    /*
    Output

    undefined
    */

    /*
    Explanation

    Regular functions
    DO NOT belong to an object.

    Therefore,

    their "this" depends
    on strict mode.
    */

    /*
    Interview Tip

    Object Method

    this -> object

    Regular Function

    this -> window (browser)

    Strict Mode

    this -> undefined
    */