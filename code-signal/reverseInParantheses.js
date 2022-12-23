/* eslint-disable no-unused-vars */
/*
Write a function that reverses characters in
(possibly nested) parentheses in the input string.
*/

/*
// locate last '('
// locate first ')'
// get characters in between
// reverse them
// take first half of the string up to the last '('
// take second half of the string up to the last ')'
// wrap the reversed string with first half and second half
// do this as long as there are parentheses
*/

function reverseInParantheses(inputString) {
  let firstIndex = inputString.lastIndexOf('(');
  let lastIndex = inputString.indexOf(')', firstIndex);
  while (firstIndex !== -1) {
    const revString = inputString.substring(firstIndex + 1, lastIndex).split('').reverse().join('');
    const firstHalf = inputString.substring(0, firstIndex);
    const secondHalf = inputString.substring(lastIndex + 1);
    inputString = firstHalf + revString + secondHalf;
    firstIndex = inputString.lastIndexOf('(');
    lastIndex = inputString.indexOf(')', firstIndex);
  }
  return inputString;
}
