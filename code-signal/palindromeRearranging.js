/* eslint-disable no-unused-vars */
/*
Given a string, find out if its characters
can be rearranged to form a palindrome.
*/

// create charCount var = 0
// create index obj {}
// create a count var = 0
// loop through inputString
// if obj[letter] doesnt exist, create the property and init to 1
// else incremement property value by 1
// loop through all keys of index obj {}
// all index[key] should be even
// if any are odd, increment counter by 1
// finish the loop
// return counter < 1

function palindromeRearranging(inputString) {
  const index = {};
  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    if (!index[letter]) {
      index[letter] = 1;
    } else {
      index[letter]++;
    }
  }

  let counter = 0;
  for (const key in index) {
    if (index[key] % 2 !== 0) counter++;
  }
  return counter < 2;
}
