# JavaScript Closures Interview Questions

## 1. What is a Closure?

A closure is a function that remembers the variables of its outer function even after the outer function has finished execution.

---

## 2. Why do we use Closures?

- Data Hiding
- Private Variables
- Function Factories
- Event Handlers
- Callbacks
- Timers

---

## 3. Can Closures access Global Variables?

Yes.

```javascript
let name = "Sachin";

function greet() {
  console.log(name);
  }

  greet();
```

  ---

  ## 4. Can Closures modify outer variables?

  Yes.

  ```javascript
  function demo() {
    let count = 0;

      return function () {
          count++;
              console.log(count);
      };
  }
  ```

  ---

  ## 5. What are the advantages of Closures?

    - Data Security
    - Encapsulation
    - State Preservation
    - Memory Efficiency
    - Cleaner Code

  ---

  ## 6. What are the disadvantages?

    - Extra memory usage
    - Variables remain in memory as long as the closure exists
    - Can lead to memory leaks if used incorrectly

 ---

  ## 7. Explain the famous loop problem using `var`.

    Because `var` is function-scoped, every callback refers to the same variable. By the time the callbacks execute, the loop has completed.

  ---

  ## 8. Difference between Scope and Closure

    | Scope | Closure |
    |--------|---------|
    | Defines where variables are accessible | Remembers variables after execution |
    | Created during code execution | Created when an inner function captures outer variables |

  ---

  ## 9. Real-world uses of Closures

    - Counters
    - Authentication
    - Module Pattern
    - Caching
    - Event Listeners
    - Debouncing
    - Throttling

 ---

  ## 10. Quick Revision

    - Closure = Function + Lexical Environment
    - Inner function remembers outer variables
    - Used for private variables
    - Useful in callbacks and asynchronous code
    - One of the most important JavaScript interview topics