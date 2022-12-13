/* eslint-disable no-unused-vars */
/*
Given an array of strings, return
another array containing all of its
longest strings.
*/

/*
create a container
create a largest var, set to 0
loop through the array, index by index
use a second loop to compare current index to every other index
if the element is being compared against itself and it is not the last element in the inner loop array, break
if it is less than any of the elements it's compared to, break
else if you've reached the last index, push it to the container
exit inner loop
return container
*/

/*
need to stay on the first element
it needs to be compared to the rest of the elements
if it is less than any of the other elements it should not make the cut
it should not be compared against itself
once it has been compared against all elements move on to b
compare b to all elements starting from a
if b is less than any element it should not make the cut
b should not be compared against itself
repeat this process for all elements
*/

function allLongestStrings(inputArray) {
  const container = [];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[i] < inputArray[j] && i !== j) {
        continue;
      } else {
        container.push(inputArray[i]);
      }
    }
  }
  return container;
}

// found a solution that was better than mine
function solution(inputArray) {
  // initializes biggest with first element of the array
  let biggest = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    // if element length is equal to biggest[0] length, push to biggest
    if (inputArray[i].length === biggest[0].length) {
      biggest.push(inputArray[i]);
    }
    // if element length is larger than biggest[0] length, reset biggest, and set element to biggest[0]
    if (inputArray[i].length > biggest[0].length) {
      biggest = [inputArray[i]];
    }
  }
  return biggest;
}
