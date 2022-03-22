'use strict';
// Eloquent JavaScript
// Chapter 5 Exercises - Higher-Order Functions

/* 
Flattening:
Use the 'reduce' method in combination with the 'concat' method
to "flatten" an array of arrays into a single array
*/
let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((previousValue, currentValue) => {
  return previousValue.concat(currentValue);
}, []);

console.log(newArray);

// → [1, 2, 3, 4, 5, 6]

// /*
// Your Own Loop:
// */
// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );
// // → 3
// // → 2
// // → 1

// /*
// Everything:
// */
// function every(array, test) {
//   // Your code here.
// }

// console.log(every([1, 3, 5], (n) => n < 10));
// // → true
// console.log(every([2, 4, 16], (n) => n < 10));
// // → false
// console.log(every([], (n) => n < 10));
// // → true

// /*
// Dominant Writing Direction:
// */
// function dominantDirection(text) {
//   // Your code here.
// }

// console.log(dominantDirection('Hello!'));
// // → ltr
// console.log(dominantDirection('Hey, مساء الخير'));
// // → rtl
