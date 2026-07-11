/*
=====================================
Accessing and Modifying Properties
=====================================
*/

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Accessing properties using dot notation
console.log(person.name); // Output: John

// Accessing properties using bracket notation
console.log(person["age"]); // Output: 30

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Adding a new property
person.country = "USA";
console.log(person.country); // Output: USA

// printing the updated object
console.log(person);

/*output:
{
  name: 'John',
  age: 31,
  city: 'New York',
  country: 'USA'
}
*/