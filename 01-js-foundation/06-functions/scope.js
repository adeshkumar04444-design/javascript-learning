// Scope, that is the accessibility of variables.

let globalVar = "I am global";

function showScope() {
  let localVar = "I am local";

  console.log(globalVar);
  console.log(localVar);
}

showScope();

// Global variables can accessed verywhere.
// Local variables exist only inside the function scope.
