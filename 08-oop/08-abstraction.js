/*
=========================================
JavaScript Abstraction
=========================================

Definition:

Abstraction means

"Hiding implementation details
and showing only the necessary features."

JavaScript doesn't have true abstract classes.

We simulate abstraction using
base classes.
*/

class Vehicle {
  start() {
      throw new Error("Method must be implemented.");
        }
        }

        class Car extends Vehicle {
          start() {
              console.log("Car started.");
                }
                }

                const car = new Car();

                car.start();

                /*
                Output

                Car started.
                */

                /*
                If someone creates

                new Vehicle().start()

                ↓

                Error

                This forces child classes
                to provide their own implementation.

                This is one way to simulate
                Abstraction in JavaScript.
                */