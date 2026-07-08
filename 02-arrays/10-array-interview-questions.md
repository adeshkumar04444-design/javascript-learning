# JavaScript Array Interview Questions

---

## Q1. What is an array?

**Answer:**

An array is a special JavaScript object used to store multiple values in a single variable. Each element is stored at a numeric index starting from `0`.

---

## Q2. Is an array an object?

**Answer:**

Yes. Arrays are a special type of object in JavaScript optimized for storing ordered collections of values.

---

## Q3. Does array indexing start from 1?

**Answer:**

No. JavaScript arrays are zero-indexed, which means the first element is stored at index `0`.

---

## Q4. Can an array store different data types?

**Answer:**

Yes. A JavaScript array can store different data types, including strings, numbers, booleans, objects, arrays, functions, `null`, and `undefined`.

---

## Q5. What is the difference between an array and an object?

**Answer:**

An array stores an ordered collection of values using numeric indexes, whereas an object stores data as key-value pairs using property names.

---

## Q6. What is the difference between `slice()` and `splice()`?

**Answer:**

* `slice()` returns a new array without modifying the original array.
* `splice()` modifies the original array by adding, removing, or replacing elements.

---

## Q7. What is the difference between `map()` and `forEach()`?

**Answer:**

* `map()` returns a new array after transforming each element.
* `forEach()` does not return a new array and is mainly used for iteration.

---

## Q8. What is the difference between `find()` and `filter()`?

**Answer:**

* `find()` returns the first element that matches the condition.
* `filter()` returns all matching elements as a new array.

---

## Q9. What is the difference between `Array.of()` and `Array.from()`?

**Answer:**

* `Array.of()` creates an array from the values passed as arguments.
* `Array.from()` creates an array from an iterable or an array-like object.

---

## Q10. What is a shallow copy?

**Answer:**

A shallow copy creates a new array, but nested objects or arrays inside it are still shared by reference.

---

## Q11. What is a deep copy?

**Answer:**

A deep copy creates completely independent copies of nested objects and arrays, so changes in one copy do not affect the other.

---

## Q12. How can you copy an array?

**Answer:**

Common ways to copy an array are:

* Spread operator (`...`)
* `slice()`
* `Array.from()`
* `concat()`
* `Object.assign()`

---

## Q13. How do you check whether a variable is an array?

**Answer:**

Use the `Array.isArray()` method.

---

## Q14. How do you access the last element of an array?

**Answer:**

The last element can be accessed using `array[array.length - 1]` or the `at(-1)` method.

---

## Q15. Are JavaScript arrays mutable?

**Answer:**

Yes. Arrays are mutable, which means their elements can be added, removed, or modified after creation.

---

## Q16. What happens when two arrays are compared using `==` or `===`?

**Answer:**

Arrays are compared by reference, not by their values. Two arrays with the same elements are not equal unless they reference the same array in memory.

---

## Q17. What is a nested array?

**Answer:**

A nested array is an array that contains one or more arrays as its elements.

---

## Q18. What are sparse arrays?

**Answer:**

Sparse arrays are arrays that contain empty slots (holes) between elements.

---

## Q19. Name some commonly used array methods.

**Answer:**

Some commonly used array methods are:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `slice()`
* `splice()`
* `concat()`
* `join()`
* `includes()`
* `indexOf()`
* `find()`
* `findIndex()`
* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `some()`
* `every()`
* `sort()`
* `reverse()`
* `flat()`
* `flatMap()`

---

## Q20. What is the time complexity of `push()` and `pop()`?

**Answer:**

* `push()` → **O(1)**
* `pop()` → **O(1)**
* `shift()` → **O(n)**
* `unshift()` → **O(n)**

---

## Q21. Which is the recommended way to create an array?

**Answer:**

The recommended way is using the array literal syntax (`[]`) because it is simple, readable, and efficient.

