# JavaScript Objects - Interview Questions

This document contains some of the most frequently asked JavaScript Object interview questions along with concise answers.

---

## 1. What is an object in JavaScript?

An object is a collection of **key-value pairs** used to store related data and functionality.

```javascript
const user = {
    name: "Alice",
    age: 25
};
```

---

## 2. How do you create an object?

The most common way is using an **object literal**.

```javascript
const user = {
    name: "Alice",
    age: 25
};
```

You can also create an object using the `new Object()` constructor.

```javascript
const user = new Object();
user.name = "Alice";
```

---

## 3. How do you access object properties?

Object properties can be accessed using **dot notation** or **bracket notation**.

```javascript
const user = {
    name: "Alice",
    age: 25
};

console.log(user.name);
console.log(user["age"]);
```

---

## 4. What is the difference between dot notation and bracket notation?

| Dot Notation | Bracket Notation |
|--------------|------------------|
| Uses `.` | Uses `[]` |
| Easy to read | Useful for dynamic property names |
| Works with valid identifiers | Works with any string key |

```javascript
const key = "name";

const user = {
    name: "Alice"
};

console.log(user[key]);
```

---

## 5. How do you add, update, and delete object properties?

```javascript
const user = {};

// Add
user.name = "Alice";

// Update
user.name = "Bob";

// Delete
delete user.name;
```

---

## 6. What is an object method?

A method is simply a **function stored inside an object**.

```javascript
const user = {

    name: "Alice",

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

user.greet();
```

---

## 7. How do you iterate over an object?

You can iterate over object properties using `for...in`.

```javascript
const user = {
    name: "Alice",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

Other commonly used methods are:

- `Object.keys()`
- `Object.values()`
- `Object.entries()`

---

## 8. What is object destructuring?

Object destructuring extracts object properties into separate variables.

```javascript
const user = {
    name: "Alice",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

---

## 9. What is the spread operator in objects?

The spread operator (`...`) copies properties from one object into another.

```javascript
const user = {
    name: "Alice",
    age: 25
};

const copy = {
    ...user,
    city: "New York"
};

console.log(copy);
```

---

## 10. What is a nested object?

A nested object is an object inside another object.

```javascript
const employee = {

    name: "Alice",

    address: {
        city: "London",
        country: "UK"
    }
};

console.log(employee.address.city);
```

---

## 11. What is the difference between shallow copy and deep copy?

A **shallow copy** copies only the first level of an object. Nested objects still share the same reference.

```javascript
const user = {
    profile: {
        name: "Alice"
    }
};

const copy = { ...user };
```

A **deep copy** creates a completely independent copy.

```javascript
const deepCopy = structuredClone(user);
```

---

## 12. What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?

```javascript
const user = {
    name: "Alice",
    age: 25
};
```

| Method | Returns |
|---------|----------|
| `Object.keys()` | Array of property names |
| `Object.values()` | Array of property values |
| `Object.entries()` | Array of key-value pairs |

---

## 13. What is the difference between `Object.freeze()` and `Object.seal()`?

| `Object.freeze()` | `Object.seal()` |
|-------------------|-----------------|
| Cannot add properties | Cannot add properties |
| Cannot delete properties | Cannot delete properties |
| Cannot modify existing properties | Can modify existing properties |

Example:

```javascript
const user = {
    name: "Alice"
};

Object.freeze(user);

// Not allowed
user.name = "Bob";

console.log(user.name);
```

---

## 14. Why are two objects with the same values not equal?

Objects are compared by **reference**, not by value.

```javascript
const obj1 = {
    name: "Alice"
};

const obj2 = {
    name: "Alice"
};

console.log(obj1 === obj2);
```

**Output**

```text
false
```

Although both objects contain the same data, they occupy different locations in memory.

---

## 15. What are the most commonly used Object methods?

Some commonly used built-in object methods are:

- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- `Object.assign()`
- `Object.freeze()`
- `Object.seal()`
- `Object.create()`
- `Object.hasOwn()`
- `Object.fromEntries()`

These methods are widely used in modern JavaScript applications and are frequently asked in interviews.
