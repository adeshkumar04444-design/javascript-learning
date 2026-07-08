/* 
Is forEach a loop?

"No, forEach() is not a loop statement. It is an Array method that executes a callback function once for each element in an array."

Practically: Yes, it is used for looping through arrays.
Technically: No, it is an Array method, not a loop statement.
*/

let numbers = [10, 20, 30];

numbers.forEach(function (value) {
  console.log(value);
});

/*
Output:
10
20
30
*/