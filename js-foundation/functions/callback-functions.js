// Callback Function

function greet(name, callback) {
    console.log("Hello" + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Adesh", sayBye);

// A function passed as an argument to another function.