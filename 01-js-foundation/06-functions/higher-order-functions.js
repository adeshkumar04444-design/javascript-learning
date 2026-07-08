// Higher Order Function

function execute(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

console.log(execute(add, 5, 3)); // Output: 8

// Higher-order functions accept functions as arguments or return functions.
