/*
=========================================
JavaScript Classes
=========================================

Definition:

A Class is a blueprint for creating objects.

Classes were introduced in ES6.

Internally,

Classes are based on Prototypes.

Syntax

class ClassName {
    constructor() {}
        methods() {}
        }
        */

        class Student {
          // Constructor

            constructor(name, course) {
                this.name = name;
                    this.course = course;
                      }

                        // Method

                          introduce() {
                              console.log(
                                    `Hello, I'm ${this.name} and I study ${this.course}.`
                                        );
                                          }

                                            study() {
                                                console.log(`${this.name} is studying JavaScript.`);
                                                  }
                                                  }

                                                  // Creating Objects

                                                  const student1 = new Student("Sachin", "BCA");
                                                  const student2 = new Student("Rahul", "B.Tech");

                                                  // Calling Methods

                                                  student1.introduce();
                                                  student1.study();

                                                  student2.introduce();

                                                  /*
                                                  Output

                                                  Hello, I'm Sachin and I study BCA.
                                                  Sachin is studying JavaScript.
                                                  Hello, I'm Rahul and I study B.Tech.
                                                  */

                                                  /*
                                                  Important Concept

                                                  Methods are NOT copied
                                                  inside every object.

                                                  Instead,

                                                  they are stored in

                                                  Student.prototype

                                                  which saves memory.

                                                  Check:

                                                  console.log(Student.prototype);

                                                  console.log(
                                                      student1.__proto__ === Student.prototype
                                                      );

                                                      // true
                                                      */

                                                      /*
                                                      Object Structure

                                                      student1

                                                      ↓

                                                      Student.prototype

                                                      ↓

                                                      Object.prototype

                                                      ↓

                                                      null

                                                      */

                                                      /*
                                                      Advantages of Classes

                                                      ✔ Cleaner Syntax

                                                      ✔ Easy Object Creation

                                                      ✔ Supports Inheritance

                                                      ✔ Better Readability

                                                      ✔ Built on Prototypes
                                                      */