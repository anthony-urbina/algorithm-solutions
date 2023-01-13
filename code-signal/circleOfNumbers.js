/* eslint-disable no-unused-vars */
/*
Consider integer numbers from 0 to n - 1
written down along the circle in such a way that
the distance between any two neighboring
numbers is equal (note that 0 and n - 1 are
neighboring, too).

Given n and firstNumber, find the number
which is written in the radially opposite position
to firstNumber.

*/
// make an array that starts from 0 to n-1
// split the array in half
// loop through the array
// check if any element from top half is equal to firstNumber
// if so return element at same index from bottom half
// check if any element from bottom half is equal to firstNumber
// if so return element at same index from top half

function circleOfNumbers(n, firstNumber) {
  const circle = [];
  for (let i = 0; i < n; i++) {
    circle.push(i);
  }
  const topHalf = circle.splice(0, circle.length / 2);
  const bottomHalf = circle.splice(0, circle.length);

  for (let i = 0; i < topHalf.length; i++) {
    if (firstNumber === topHalf[i]) {
      return bottomHalf[i];
    } else if (firstNumber === bottomHalf[i]) {
      return topHalf[i];
    }
  }
}
