/* eslint-disable no-unused-vars */
/*
Given a string, find out if its characters
can be rearranged to form a palindrome.
*/

// create charCount var = 0
// create index obj {}
// loop through inputString
// if obj[letter] doesnt exist
// create that property and init it w a value of 1 and add 1 to charCount
// else, just add 1 to the already exisiting property and add 1 to charCount
// loop through all keys of index obj {}
// if charCount is even
// all index[key] should be even
// if not, then return false because it cannot be rerarranged to form a palindrome
// if charCount is odd
// all index[key] should be even
// if any are odd, increment counter by 1
// finish the loop
// return counter < 1

function palindromeRearraning(inputString) {
  let charCount = 0;
  const index = {};
  for (let i = 0; i < inputString.length; i++) {
    if (!index[inputString[i]]) {
      index[inputString[i]] = 1;
      charCount++;
    } else {
      index[inputString[i]]++;
      charCount++;
    }
  }
  let counter = 0;
  for (const key in index) {
    if (charCount % 2 === 0) {
      if (index[key] % 2 !== 0) return false;
    } else {
      if (index[key] % 2 !== 0) counter++;
    }
  }
  return counter < 2;
}
