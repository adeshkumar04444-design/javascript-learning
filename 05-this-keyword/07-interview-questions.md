# JavaScript "this" Interview Questions

## 1. What is `this`?

`this` is a special keyword that refers to the object that is currently executing the function. Its value depends on **how the function is called**, not where it is defined.

---

## 2. What is `this` in the global scope?

### Browser

```javascript
console.log(this); // window
```

### Node.js

```javascript
console.log(this); // {}
```

---

## 3. What is `this` inside an object method?

```javascript
const user = {
  name: "Sachin",
    greet() {
        console.log(this.name);
          },
          };
          ```

          Output:

          ```
          Sachin
          ```

---

## 4. What is `this` inside a regular function?

  - Browser (non-strict mode): `window`
      - Strict mode: `undefined`
      
---

          ## 5. What is `this` inside an arrow function?

          Arrow functions do not have their own `this`. They inherit it from the surrounding scope (lexical `this`).

          ---

          ## 6. Difference between Regular Function and Arrow Function

          | Regular Function | Arrow Function |
          |------------------|----------------|
          | Has its own `this` | Doesn't have its own `this` |
          | Can be used as object methods | Not recommended as object methods |
          | Dynamic `this` | Lexical `this` |

          ---

          ## 7. What do `call()`, `apply()`, and `bind()` do?

          - **call()** → Executes immediately with arguments passed separately.
          - **apply()** → Executes immediately with arguments passed as an array.
          - **bind()** → Returns a new function with `this` permanently set.

          ---

          ## Quick Revision

          - `this` depends on **how** a function is called.
          - In object methods, `this` refers to the object.
          - In regular functions, `this` depends on strict mode and environment.
          - Arrow functions inherit `this` from their surrounding scope.
          - `call()`, `apply()`, and `bind()` are used to control the value of `this`.