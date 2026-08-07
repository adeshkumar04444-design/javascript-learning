/*
=========================================
Constructor Functions
=========================================

Definition:

A Constructor Function is used to create
multiple objects with the same structure.

It works together with the "new" keyword.

Naming Convention:

Constructor names start with Capital Letter.
*/

// Constructor Function

function Student(name, age, course) {
  this.name = name;
    this.age = age;
      this.course = course;

        this.introduce = function () {
            console.log(
                  `Hi, I'm ${this.name} and I study ${this.course}.`
                      );
                        };
                        }

                        // Creating Objects

                        const student1 = new Student("Sachin", 21, "BCA");
                        const student2 = new Student("Rahul", 20, "B.Tech");

                        // Access Properties

                        console.log(student1.name);
                        console.log(student2.course);

                        // Calling Methods

                        student1.introduce();
                        student2.introduce();

                        /*
                        Output

                        Sachin
                        B.Tech
                        Hi, I'm Sachin and I study BCA.
                        Hi, I'm Rahul and I study B.Tech.
                        */

                        /*
                        Memory Problem

                        Every object gets its own copy of introduce().

                        student1 ---> introduce()
                        student2 ---> introduce()

                        This wastes memory.

                        Solution:

                        Use Prototypes.
                        */