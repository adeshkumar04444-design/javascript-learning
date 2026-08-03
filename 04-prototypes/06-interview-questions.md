# Prototype Interview Questions

## 1. What is Prototype?

A prototype is an object from which other objects inherit properties and methods.

---

## 2. What is Prototype Chain?

A mechanism where JavaScript searches for a property through an object's prototype until it reaches `null`.

---

## 3. Difference between __proto__ and prototype

| __proto__ | prototype |
|-----------|-----------|
| Exists on objects | Exists on functions |
| Points to object's prototype | Used while creating objects |

---

## 4. What is Object.create()?

Creates a new object using another object as its prototype.

Example:

```javascript
const person = {
  greet() {
    console.log("Hello");
  },
};

const user = Object.create(person);

user.greet();
```

---

## 5. Why do we use Prototypes?

- Code Reusability
- Memory Efficiency
- Inheritance
- Shared Methods

---

## 6. Are Classes Based on Prototypes?

Yes.

JavaScript classes internally use prototypes.

---

## 7. How to check Prototype?

```javascript
Object.getPrototypeOf(obj);
```

---

## 8. What is Object.prototype?

The top-level prototype from which most objects inherit.

---

## 9. Can we change Prototype?

Yes.

```javascript
Object.setPrototypeOf(obj, parent);
```

---

## 10. What is the End of Prototype Chain?

```
null
```

---

# Quick Revision

- Every object has a prototype.
- Prototype provides inheritance.
- JavaScript searches through the prototype chain.
- `Object.create()` creates objects with a specific prototype.
- Classes internally use prototypes.
- Shared methods are stored on the prototype, not copied into each object.