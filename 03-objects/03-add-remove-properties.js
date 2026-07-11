/*
=====================================
Adding and Removing Properties
=====================================
*/

const employee = {
  name: "Alice",
};

// Adding a new property
employee.age = 28;
console.log(employee.age); // Output: 28

// Add another property using bracket notation
employee["position"] = "Developer";
console.log(employee.position); // Output: Developer

// Removing a property using the delete operator
delete employee.age;
console.log(employee.age); // Output: undefined

// printing the updated object
console.log(employee);

/*output:
{
  name: 'Alice',
  position: 'Developer'
}
*/
