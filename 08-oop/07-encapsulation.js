/*
=========================================
JavaScript Encapsulation
=========================================

Definition:

Encapsulation means

"Wrapping data and methods
inside one unit."

Modern JavaScript supports
Private Fields using #.
*/

class BankAccount {
  #balance = 0;

    deposit(amount) {
        this.#balance += amount;
          }

            withdraw(amount) {
                this.#balance -= amount;
                  }

                    showBalance() {
                        console.log(`Balance: ₹${this.#balance}`);
                          }
                          }

                          const account = new BankAccount();

                          account.deposit(5000);
                          account.withdraw(1000);

                          account.showBalance();

                          /*
                          Output

                          Balance: ₹4000
                          */

                          // Error

                          // console.log(account.#balance);

                          /*
                          Private fields cannot
                          be accessed directly.

                          Advantages

                          ✔ Data Protection
                          ✔ Better Security
                          ✔ Controlled Access
                          */