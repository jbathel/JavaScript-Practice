// Eloquent JavaScript
// Chapter 2 Exercises - Program Structure

/* 
Looping a Triangle:
Write a loop that makes seven calls to console.log 
to output the following triangle:
#
##
###
####
#####
######
####### 
*/
let count = 1;
let hash = '#';

while (count <= 7) {
  console.log(hash);
  hash += '#';
  count += 1;
}

/*
FizzBuzz:
Write a program that uses console.log to print all numbers from 
1 to 100 with exceptions. If the number is divisible by 3 print 'Fizz', 
if the number is divisble by 5 print 'Buzz', and if the number
is divisible by 3 and 5 print 'FizzBuzz'.
*/
// Print all the numbers from 1 to 100
for (let count = 1; count <= 100; count += 1) {
  // If divisible by 3 and 5 print "FizzBuzz"
  if (count % 15 == 0) {
    console.log('FizzBuzz');
    // If divisible by 5 print 'Buzz'
  } else if (count % 5 == 0) {
    console.log('Buzz');
    // If divisible by 3 print 'Fizz'
  } else if (count % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(count);
  }
}

/* 
Chessboard:
Write a program that creates a string that represents an 8x8
grid, using newline characters to separate lines. At each position 
of the grid there is either a space or #, forming a chessboard 
pattern:
 # # # #
# # # #
 # # # #
# # # # ...
Then change the program so that it works for any size, outputting 
a grid of the given height and width.
*/
let chessboard = '';
let rows = 8;
let cols = 8;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if ((i + j) % 2 == 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}
console.log(chessboard);
