/*
=====================================
Nested Objects
=====================================

An object can contain another object.
This is called a nested object.
*/

const student = {
  name: "Alice",
  age: 20,

  address: {
    street: "123 Main St",
    city: "New York",
  },
};

// Accessing a nested property
console.log(student.address.street); // Output: 123 Main St

// Modifying a nested property
student.address.street = "456 Oak Ave";
console.log(student.address.street); // Output: 456 Oak Ave

// Printing the updated object
console.log(student);

/*
Output:
{
  name: 'Alice',
  age: 20,
  address: { street: '456 Oak Ave', city: 'New York' }
}
*/
