/*
=========================================
The "new" Keyword
=========================================

Definition:

The "new" keyword creates a new object
from a Constructor Function.

What happens internally?

1. Creates an empty object.
2. Sets prototype.
3. Binds "this" to the new object.
4. Executes constructor function.
5. Returns the object.
*/

function Car(brand, model) {
  this.brand = brand;
    this.model = model;
    }

    const car1 = new Car("Toyota", "Fortuner");
    const car2 = new Car("BMW", "X5");

    console.log(car1);
    console.log(car2);

    /*
    Without "new"

    Car("Toyota", "Fortuner");

    This will NOT create an object.

    Instead,

    this refers to global object
    (or undefined in strict mode).

    Always use "new" with
    Constructor Functions.
    */

    /*
    Internal Process

    new Car()

    ↓

    {}

    ↓

    this = {}

    ↓

    brand, model added

    ↓

    return object
    */