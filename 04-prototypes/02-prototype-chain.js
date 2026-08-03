/*
=====================================
Prototype Chain
=====================================

If JavaScript cannot find a property
inside an object,

it searches inside its prototype.

If not found,

it continues searching up the chain.

This process is called Prototype Chain.
*/

const animal = {
  eats: true,
};

const dog = {
  bark() {
    console.log("Woof!");
  },
};

// Setting prototype
Object.setPrototypeOf(dog, animal);

console.log(dog.eats); // true
dog.bark();

/*
Search Process

dog.eats

↓

dog (No property)

↓

animal (Found)

↓

Return true
*/

console.log(Object.getPrototypeOf(dog));

/*
Prototype Chain Example

dog
↓

animal
↓

Object.prototype
↓

null
*/
