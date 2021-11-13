'use strict';
// Eloquent JavaScript
// Chapter 4 Program - The Weresquirrel

// Chapter 4 Exercises - Data Structures: Objects and Arrays
/* 
The Sum of a Range:
Write a 'range' function that takes two arguments, start and end, and 
returns an array containing all the numbers from start up to and 
including end.
Write a 'sum' function that takes an array of numbers and 
returns the sum of these numbers.
Test whether it returns 55.
Bonus: Modify the range function to take an optional third 
argument, step. So that the array will increment by the step 
or by 1 if none given.
*/
// Function that returns array containing all numbers from start to end
function range(start, end) {
  let arrRange = [];
  while (start <= end) {
    arrRange.push(start);
    start++;
  }
  return arrRange;
}

console.log(range(1, 10));

// Function that returns array containing all numbers from start to end
function sum(arr) {
  let arrSum = 0;
  for (const num of arr) {
    arrSum += num;
  }
  return arrSum;
}

// Test case
console.log(sum(range(1, 10)));
// 55

function rangeStep(start, end, step = start < end ? 1 : -1) {
  let arrRangeStep = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arrRangeStep.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arrRangeStep.push(i);
    }
  }
  return arrRangeStep;
}

console.log(rangeStep(1, 10, 2));
console.log(rangeStep(10, 1, -5));

/* 
Reversing an Array:
Write a function 'reverseArray' that takes in an array as its 
argument and produces a new array that has the same elements in the
inverse order.
Write a function 'reverseArrayInPlace' that takes in an array
as its argument and modifies the array by reversing its elements.
Do not use the 'reverse' method. 
*/
// Mathods that create a new array
function reverseArray(arr) {
  // Create a new array by reversing given array
  let reverseArr = [];
  // Loop over array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    // Push each index to new array
    reverseArr.push(i);
  }
  return reverseArr;
}

function reverseArrayMap(arr) {
  return arr.map((num, index) => arr[arr.length - (index + 1)]);
}

function reverseArrayReduce(arr) {
  return arr.reduce(
    (acc, num, index) => [...acc, arr[arr.length - (index + 1)]],
    []
  );
}

// Methods that do not create a new array
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // console.log('Start:', arr[i]);
    // console.log('End:', arr[arr.length - 1 - i]);
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([0, 1, 2, 3, 4]));
console.log(reverseArrayInPlace([0, 1, 2, 3, 4]));
console.log(reverseArrayMap([0, 1, 2, 3, 4]));
console.log(reverseArrayMap(['H', 'E', 'L', 'L', 'O']));
console.log(reverseArrayReduce([0, 1, 2, 3, 4]));
console.log(reverseArrayReduce(['H', 'E', 'L', 'L', 'O']));

/*
A list:
Write a function 'arrayToList' that builds a list structure like the one
shown when given the argument [1, 2, 3].
Write a function 'listToArray' that produces an array from a list.
Add a helper function 'prepend' that takes an element and a list and creates 
a new list that adds the element to the front of the input list, and nth, 
which takes a list and a number and returns the element at the given position
in the list or undefined when there is no such element.
Try writting this recursively as well.
*/

// builds a list structure from an array
function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
// produces an array from a list
function listToArray(list) {
  let arr = [];
  return arr;
}
// helper function that takes an element & list and creates a new list that adds the element to the front of the input list
function prepend(element) {}
// returnss the element at the given position or undefined if not in the list
function nth(index) {}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/* 
Deep Comparison:
Write a function 'deepEqual' that takes two values and returns true
only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared when
compared with a recursive call to deepEqual.
*/
