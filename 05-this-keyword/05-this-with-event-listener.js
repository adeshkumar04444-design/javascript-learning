/*
=========================================
"this" with Event Listener
=========================================

This example works only
inside a browser.

Create a button

<button id="btn">Click</button>
*/

const button = document.getElementById("btn");

/*
Regular Function
*/

button.addEventListener("click", function () {
  console.log(this);

    /*
      Output

        <button id="btn">Click</button>

          "this"

            refers to the clicked element.
              */
              });

              /*
              Arrow Function
              */

              button.addEventListener("click", () => {
                console.log(this);

                  /*
                    Output

                      window (browser)

                        Arrow functions
                          inherit "this"

                            from outside.
                              */
                              });

                              /*
                              Recommendation

                              Use Regular Functions
                              inside Event Listeners.
                              */