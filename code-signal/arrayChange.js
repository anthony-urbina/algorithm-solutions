/* eslint-disable no-unused-vars */
/*
You are given an array of integers. On each move you are allowed to
increase exactly one of its element by one. Find the minimal number
of moves required to obtain a strictly increasing sequence from the input.
*/

// create count variable = 0
// loop through the array
// if b < a, get the difference
// add difference + 1 + b to b
// add difference + 1 to counter
// if b = a, add 1 to counter
// add 1 to b
// return counter

function arrayChange(inputArray) {
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const count = 0;
    const a = inputArray[i];
    const b = inputArray[i + 1];
    if (b < a) {
      const diff = a - b + 1;
      inputArray[i + 1] = b + diff;
      counter += diff;
    } else if (b === a) {
      inputArray[i + 1] = b + 1;
      counter += 1;
    }
  }
  return counter;
}
