/*
=========================================
"this" Inside an Object
=========================================

Inside an object method,

"this"

refers to the object
that calls the method.
*/

const person = {
  firstName: "Sachin",
    age: 21,

      introduce() {
          console.log(`My name is ${this.firstName}`);
              console.log(`Age: ${this.age}`);
                },
                };

                person.introduce();

                /*
                Output

                My name is Sachin
                Age: 21
                */

                /*
                Explanation

                person.introduce()

                ↓

                this

                ↓

                person

                ↓

                this.firstName

                ↓

                "Sachin"
                */

                /*
                Important

                Never hardcode object names.

                Bad

                console.log(person.firstName)

                Good

                console.log(this.firstName)

                This makes code reusable.
                */

                const anotherPerson = {
                  firstName: "Rahul",
                    age: 22,
                      introduce: person.introduce,
                      };

                      anotherPerson.introduce();

                      /*
                      Output

                      My name is Rahul
                      Age: 22

                      Same function
                      Different object
                      */