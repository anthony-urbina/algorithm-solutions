/* eslint-disable no-unused-vars */
/*
Ticket numbers usually consist of an
even number of digits. A ticket number is
considered lucky if the sum of the first
half of the digits is equal to the sum of the
second half.
*/

/*
turn number into string
turn string into array
get length of array, divide by 2
split array evenly into two arrays
reduce both seperatley
compare
if equal, return true
else, return false
*/

function isLucky(num) {
  const str = num.toString();
  const arr = str.split('').map(int => int);

  const halfway = arr.length / 2;

  const arr1 = arr.splice(0, halfway);
  const arr2 = arr.splice(0, halfway);

  const str1 = arr1.map(str => parseInt(str));
  const str2 = arr2.map(str => parseInt(str));
  const num1 = str1.reduce((a, b) => a + b, 0);
  const num2 = str2.reduce((a, b) => a + b, 0);
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
