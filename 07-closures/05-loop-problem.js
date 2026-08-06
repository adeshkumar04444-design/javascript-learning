/*
=====================================
Loop Problem using var
=====================================

One of the most common
JavaScript interview questions.
*/

for (var i = 1; i <= 3; i++) {

  setTimeout(function () {

      console.log(i);

        }, 1000);

        }

        /*
        Output

        4
        4
        4

        Why?

        Because var is function-scoped.

        All callbacks share
        the SAME variable.

        =====================================
        Solution using let
        =====================================
        */

        for (let j = 1; j <= 3; j++) {

          setTimeout(function () {

              console.log(j);

                }, 2000);

                }

                /*
                Output

                1
                2
                3

                Why?

                let creates a NEW variable
                for every loop iteration.

                =====================================
                Solution using Closure
                =====================================
                */

                for (var k = 1; k <= 3; k++) {

                  (function (num) {

                      setTimeout(function () {

                            console.log(num);

                                }, 3000);

                                  })(k);

                                  }

                                  /*
                                  Output

                                  1
                                  2
                                  3

                                  =====================================

                                  Interview Question

                                  Why does var print
                                  4 4 4 ?

                                  Because all callbacks
                                  share the same variable.

                                  Closure fixes this problem.
                                  */