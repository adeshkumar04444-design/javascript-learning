/*
=========================================
JavaScript "this" Keyword
Global Context
=========================================

Definition:

The value of "this" depends on
HOW a function is called,
NOT where it is written.

In the Global Execution Context:

Browser
-------
this ---> window

Node.js
-------
this ---> module.exports (not global)

Run this file in your environment
to see the result.
*/

console.log(this);

/*
Browser Output:

Window {...}

Node.js Output:

{}
(or module.exports)
*/

/*
Example
*/

var username = "Sachin";

console.log(this.username);

/*
Browser

Sachin

Node.js

undefined

Why?

Because in browsers,
var creates a property on window.

Node.js does not.
*/

/*
Summary

✔ Global "this" is different
in Browser and Node.js.

✔ "this" depends on execution context.
*/