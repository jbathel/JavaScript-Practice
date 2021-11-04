// Eloquent JavaScript
// Chapter 3 Exercises - Functions

/* 
Minimum:
Write a function 'min' that takes two arguments and returns
their minimun
*/
let min = (a, b) => {
  return a < b ? a : b;
  // if (a < b) {
  //   return a;
  // } else {
  //   return b;
  // }
};

console.log(min(10, 20));
console.log(min(10, -20));
console.log(min(-10, -2));
console.log(min(0, -0.1));
console.log(min(5.34, 2.76));

/*
Recursion:
Define a recursive function isEven corresponding to this description.
Function accepts a single parameter (a positive, whole number)
and returns a boolean.
Test cases: 50, 75, -1
*/
function isEven(number) {
  while (typeof number === 'number') {
    if (number < 0) {
      number = Math.abs(number);
    } else if (number === 0) {
      return true;
    } else if (number === 1) {
      return false;
    } else {
      return isEven(number - 2);
    }
  }
  return -1;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-10));
console.log(isEven('hello'));

/* 
Bean Counting:
Write a function called 'countBs' that takes a string as its only
argument and returns a number that indicates how many uppercase 'B'
characters the are in the string.
Write a function called 'countChar' that behaves like 'countBs' except
it has a second argument that indicates the character that is to be 
counted.
Rewrite 'countBs' to make use of the second function.
*/

function countBs(string) {
  let sumBs = 0;
  // loop over each character of the the string
  for (let i = 0; i < string.length; i++) {
    // if the current character matches 'B' then increase count
    if (string[i] === 'B') {
      sumBs++;
    }
  }
  // return count
  return sumBs;
}

function countChar(string, char) {
  let sumChars = 0;
  // loop over each character of the the string
  for (let i = 0; i < string.length; i++) {
    // if the current character matches 'B' then increase count
    if (string[i] === char) {
      sumChars++;
    }
  }
  // return count
  return sumChars;
}

console.log(countBs('Testing how many Bs or bs are in Bobby B. Billwright?'));
console.log(countChar('Testing how many chars are in this string', 'T'));

// Rewrite 'countBs' to make use of the second function
function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('Testing how many Bs or bs are in Bobby B. Billwright?'));
console.log(countBs('BBBBBB'));
