/*

You can form a number spiral by starting at 1 in the middle
and writing the integers increasingly going right and clockwise.
For instance a size 5 number spiral would look like this:

21  22  23  24  25
20  7   8   9   10
19  6   1   2   11
18  5   4   3   12
17  16  15  14  13

The sum of all the numbers along the diagonals of a size 5
number spiral is 1 + 3 + 5 + 7 + 9 + 13 + 17 + 21 + 25 = 101
(notice we only count the number 1 once despite it being on both diagonals).

What is the sum of all the numbers
along the diagonals of a size 1001 number spiral?

Hint: think about the concentric squares,
and consider the final number in each one


*/

var spiralDiagonal = function( n ) {

  if ( n === 1 ) {
    return 1;
  }

  return (4 * Math.pow(n, 2) ) - (6 * n) + 6 + spiralDiagonal(n - 2);

};

console.log(spiralDiagonal(5), 101);
console.log(spiralDiagonal(1001));
