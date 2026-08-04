/*
=========================================
Arrow Function and "this"
=========================================

Arrow functions

DO NOT create their own "this".

Instead,

they inherit "this"
from their surrounding scope.

This is called

Lexical "this".
*/

const user = {
  name: "Sachin",

    regularFunction() {
        console.log(this.name);
          },

            arrowFunction: () => {
                console.log(this.name);
                  },
                  };
               
                  user.regularFunction();

                  /*
                  Output

                  Sachin
                  */

                  user.arrowFunction();

                  /*
                  Output

                  undefined

                  Why?

                  Arrow functions
                  don't have their own "this".

                  They inherit
                  the global "this".
                  */

                  /*
                  Correct Example
                  */

                  const student = {
                    name: "Sachin",

                      greet() {
                          const printName = () => {
                                console.log(this.name);
                                    };

                                        printName();
                                          },
                                          };

                                          student.greet();

                                          /*
                                          Output

                                          Sachin
                                          */