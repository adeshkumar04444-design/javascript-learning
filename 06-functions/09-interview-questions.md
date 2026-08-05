# JavaScript Functions - Interview Questions

## 1. What is a Function?

A function is a reusable block of code designed to perform a specific task.

---

## 2. Function Declaration vs Function Expression

| Function Declaration | Function Expression |
|----------------------|---------------------|
| Hoisted | Not Hoisted |
| Has function name | Stored in variable |
| Can call before declaration | Cannot call before declaration |

---

## 3. What is an Arrow Function?

Arrow functions are a shorter syntax introduced in ES6. They also inherit `this` from the surrounding scope.

Example:

```javascript
const add = (a, b) => a + b;
```

---

## 4. What are Default Parameters?

Default parameters assign default values to function parameters when no argument is provided.

```javascript
function greet(name = "Guest") {
  console.log(name);
  }
  ```

  ---

  ## 5. What are Rest Parameters?

  Rest parameters collect multiple arguments into a single array.

```javascript
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
    }
```

  ---

  ## 6. What is a Callback Function?

    A callback function is a function passed as an argument to another function and executed later.

  ---

  ## 7. Difference between Rest and Spread Operator

    | Rest (`...`) | Spread (`...`) |
    |--------------|----------------|
    | Collects values | Expands values |
    | Used in function parameters | Used with arrays/objects |

  ---

  ## Quick Revision

    - Function Declaration → Hoisted
    - Function Expression → Not Hoisted
    - Arrow Function → Lexical `this`
    - Default Parameters → Default values
    - Rest Parameters → Collect arguments
    - Callback Function → Function passed as an argument