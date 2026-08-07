/*
=========================================
JavaScript Inheritance
=========================================

Definition:

Inheritance allows one class to use
the properties and methods of another class.

In JavaScript,
Inheritance is achieved using the "extends" keyword.

Parent Class
↓

Child Class

The child gets all properties and methods
of the parent.
*/

// Parent Class

class Person {
  constructor(name) {
      this.name = name;
        }

          greet() {
              console.log(`Hello, I'm ${this.name}`);
                }
                }

                // Child Class

                class Student extends Person {
                  constructor(name, course) {
                      // Calls Parent Constructor
                          super(name);

                              this.course = course;
                                }

                                  study() {
                                      console.log(`${this.name} is studying ${this.course}.`);
                                        }
                                        }

                                        // Creating Object

                                        const student = new Student("Sachin", "JavaScript");

                                        student.greet();
                                        student.study();

                                        /*
                                        Output

                                        Hello, I'm Sachin
                                        Sachin is studying JavaScript.
                                        */

                                        /*
                                        Hierarchy

                                        Student

                                        ↓

                                        Person

                                        ↓

                                        Object

                                        ↓

                                        null

                                        Advantages

                                        ✔ Code Reusability
                                        ✔ Easy Maintenance
                                        ✔ Less Duplicate Code
                                        */