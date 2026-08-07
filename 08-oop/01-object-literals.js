/*
=========================================
JavaScript Object Literals
=========================================

Definition:
An Object Literal is the simplest way to
create an object in JavaScript.

Objects store data in the form of
key-value pairs.

Syntax:

const objectName = {
    key: value
    }

    */

    // Creating an object using Object Literal

    const student = {
      name: "Sachin",
        age: 21,
          course: "BCA",

            // Method
              introduce() {
                  console.log(
                        `Hi, I'm ${this.name} and I'm studying ${this.course}.`
                            );
                              },
                              };

                              // Accessing Properties

                              console.log(student.name); // Sachin
                              console.log(student.age); // 21

                              // Calling Method

                              student.introduce();

                              /*
                              Output:

                              Sachin
                              21
                              Hi, I'm Sachin and I'm studying BCA.
                              */

                              // Adding a New Property

                              student.city = "Prayagraj";

                              console.log(student.city);

                              // Updating Property

                              student.age = 22;

                              console.log(student.age);

                              // Deleting Property

                              delete student.city;

                              console.log(student);

                              /*
                              Important Points

                              ✔ Easy to create objects
                              ✔ Stores data and methods together
                              ✔ Suitable for small applications
                              ✔ No inheritance by default
                              */