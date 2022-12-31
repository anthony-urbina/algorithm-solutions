/* eslint-disable no-unused-vars */
/*
You are given an array of integers representing
coordinates of obstacles situated on a straight
line.

Assume that you are jumping from the point with
coordinate 0 to the right. You are allowed only
to make jumps of the same length represented
by some integer.

Find the minimal length of the jump enough to
avoid all the obstacles.
*/

// init minLength = 2
// loop through inputArray
// if element mod minLength equals 0
// add 1 to minLength
// start from the beginning of the array
// exit loop
// return midLength if nothing went wrong

function avoidObstacles(inputArray) {
  let minLength = 2;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % minLength === 0) {
      i = -1;
      minLength++;
    }
  }
  return minLength;
}
