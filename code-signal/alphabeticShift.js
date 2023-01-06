/* eslint-disable no-unused-vars */
/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
*/

// create string with all alphabet letters
// create new empty string
// loop through inputString
// get index of inputString[i] in alphabet
// if index is last letter, newStr += 'a'
// set newStr += alphabet[index+1]
// exit loop
// return inputString

function alphabeticShift(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newStr = '';
  for (let i = 0; i < inputString.length; i++) {
    const index = alphabet.indexOf(inputString[i]);
    if (index === 25) {
      newStr += 'a';
    } else {
      newStr += alphabet[index + 1];
    }
  }
  return newStr;
}
