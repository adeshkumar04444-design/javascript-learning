# JavaScript OOP Interview Questions

## 1. What is OOP?

Object-Oriented Programming is a programming paradigm based on objects that contain properties (data) and methods (behavior).

---

## 2. Four Pillars of OOP

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

---

## 3. What is an Object Literal?

The simplest way to create an object using `{}`.

```javascript
const user = {
  name: "Sachin",
  };
  ```

  ---

  ## 4. What is a Constructor Function?

  A function used with the `new` keyword to create multiple objects having the same structure.

  ---

  ## 5. What does the `new` keyword do?

  - Creates a new object.
  - Links it to the constructor's prototype.
  - Binds `this` to the new object.
  - Executes the constructor.
  - Returns the new object.

  ---

  ## 6. What is a Class?

  A blueprint for creating objects. JavaScript classes are syntactic sugar over prototypes.

  ---

  ## 7. What is Inheritance?

  Inheritance allows a child class to reuse the properties and methods of a parent class using the `extends` keyword.

  ---

  ## 8. What is Polymorphism?

  The ability of a method to have different behaviors depending on the object that calls it.

  ---

  ## 9. What is Encapsulation?

  Encapsulation bundles data and methods together and restricts direct access to internal data. Modern JavaScript supports private fields with `#`.

  ---

  ## 10. What is Abstraction?

  Abstraction hides implementation details and exposes only the essential functionality.

  ---

  ## 11. What are Static Methods?

  Static methods belong to the class itself and are called without creating an object.

```javascript
  class Demo {
    static greet() {
        console.log("Hello");
          }
          }

          Demo.greet();
  ```

  ---

  ## 12. Difference between Constructor Functions and Classes

  | Constructor Function | Class |
  |----------------------|-------|
  | ES5 syntax | ES6 syntax |
  | Uses `function` | Uses `class` |
  | Called with `new` | Called with `new` |
  | Prototype methods added manually | Methods automatically added to the prototype |

  ---

  ## 13. Difference between Inheritance and Composition

  - **Inheritance:** Reuses code by extending a parent class.
  - **Composition:** Builds objects by combining smaller objects instead of extending classes.

  ---

  ## 14. What is Method Overriding?

  When a child class provides its own implementation of a method inherited from the parent class.

  ---

  ## 15. Quick Revision

  - OOP = Objects + Classes
  - Object Literal → Simplest object creation
  - Constructor Function → Creates multiple objects
  - `new` → Creates and initializes an object
  - Class → Cleaner syntax over prototypes
  - Inheritance → Reuse code
  - Polymorphism → Same method, different behavior
  - Encapsulation → Hide internal data
  - Abstraction → Hide implementation details
  - Static Methods → Belong to the class, not instances