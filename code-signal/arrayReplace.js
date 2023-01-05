/* eslint-disable no-unused-vars */
/*
  Given an array of integers, replace all the
  occurrences of elemToReplace with
  substitutionElem.
  */

// loop through array
// find indexes where element is equal to elemToReplace
// replace them with substitutionElem
// exit loop
// return input array

function arrayReplace(inputArray, elemToReplace, substitutionElem) {

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) inputArray[i] = substitutionElem;
  }
  return inputArray;
}
