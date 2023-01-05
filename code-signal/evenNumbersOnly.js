/* eslint-disable no-unused-vars */
/*
Check if all digits of the given integer are even.
*/

// turn the number into string
// split by '' to get digits in an array
// loop through array
// turn elements into numbers
// if number mod 2 doesn't equal 0, return false
// exit loop
// return true

function evenNumbersOnly(n) {
  n = n.toString().split('');
  for (let i = 0; i < n.length; i++) {
    if (parseInt(n[i]) % 2 !== 0) return false;
  }
  return true;
}
