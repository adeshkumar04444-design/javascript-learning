/*
=====================================
Object Methods
=====================================

A method is simply a function stored inside an object.
*/

const student = {

  name: "Alice",

  // Method
    introduce() {
      
    //'this' refers to the current object
    console.log(`Hello, my name is ${this.name}.`);
  },
};

// Calling the object method
student.introduce();

/*
 Output: 
 
 Hello, my name is Alice.
 */
