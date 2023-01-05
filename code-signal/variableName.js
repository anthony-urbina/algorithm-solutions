/* eslint-disable no-unused-vars */
/*
Correct variable names consist only of English
letters, digits and underscores and they can't
start with a digit.

Check if the given string is a correct variable
name.
*/

// construct regex for digits, letters and underscores
// construct regex2 for string that starts w number
// if element matches regex2 return false
// loop through name
// if element does not match regex return false
// exit loop
// return true

function variableName(name) {
  const regex = /[0-9a-zA-Z_]/g;
  const regex2 = /^\d/g;
  if (name.match(regex2)) return false;
  for (let i = 0; i < name.length; i++) {
    if (!name[i].match(regex)) return false;
  }
  return true;
}
