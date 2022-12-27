/* eslint-disable no-unused-vars */
/*
Given an array of integers, find the maximal absolute
difference between any two of its adjacent elements.
*/

// create a diff var = 0
// loop through inputArray
// a = inputArray[i]
// b = inputArray[i+1]
// get diff of b-a, convert it into a positive int
// if it is larger than diff, assign it to diff
// finish the loop
// return dif

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const a = inputArray[i];
    const b = inputArray[i + 1];
    const currentDiff = Math.abs(b - a);
    maxDiff = currentDiff > maxDiff ? currentDiff : maxDiff;
  }
  return maxDiff;
}
