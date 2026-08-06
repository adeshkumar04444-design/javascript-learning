/*
=====================================
Private Variables using Closures
=====================================

JavaScript doesn't have true private
variables (before #private fields).

Closures can hide data from outside.

Only the returned functions
can access the hidden variable.
*/

function createBankAccount() {
  let balance = 1000; // Private variable

    return {
        deposit(amount) {
              balance += amount;
                    console.log("Balance:", balance);
                        },

                            withdraw(amount) {
                                  balance -= amount;
                                        console.log("Balance:", balance);
                                            },

                                                getBalance() {
                                                      return balance;
                                                          },
                                                            };
                                                            }

                                                            const account = createBankAccount();

                                                            account.deposit(500);

                                                            account.withdraw(200);

                                                            console.log(account.getBalance());

                                                            console.log(account.balance);

                                                            /*
                                                            Output

                                                            Balance: 1500
                                                            Balance: 1300
                                                            1300
                                                            undefined

                                                            =====================================

                                                            Explanation

                                                            balance is NOT directly accessible.

                                                            Only deposit(),
                                                            withdraw(),
                                                            getBalance()

                                                            can use it.

                                                            This provides Data Security.

                                                            */