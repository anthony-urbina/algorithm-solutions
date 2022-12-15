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

// found a solution that's better than mine

function solution(n) {
  // converts n to a string
  var s = n.toString();
  var sum1 = 0;
  var sum2 = 0;
  // loop through string as long as i is less than HALF the length string
  for (var i = 0; i < s.length / 2; i++) {
    // convert element to integer
    // incrementally assign the first half of elements to sum1
    sum1 += parseInt(s[i]);
    // convert element to integer
    // incrementally assign the second half of elements to sum2
    sum2 += parseInt(s[s.length - i - 1]);
  }
  // return true if equal, false if not equal
  return sum1 === sum2;
}
