/*
=====================================
Data Hiding using Closures
=====================================

Closures are commonly used to
hide sensitive information.

Users can only use the provided methods.
*/

function createUser() {
  let password = "JavaScript123";

    return {

        checkPassword(input) {
              return input === password;
                  },

                      changePassword(newPassword) {
                            password = newPassword;
                                }

                                  };
                                  }

                                  const user = createUser();

                                  console.log(user.checkPassword("JavaScript123"));

                                  user.changePassword("NewPassword");

                                  console.log(user.checkPassword("NewPassword"));

                                  console.log(user.password);

                                  /*
                                  Output

                                  true
                                  true
                                  undefined

                                  =====================================

                                  Password cannot be accessed directly.

                                  It is hidden inside the closure.
                                  */