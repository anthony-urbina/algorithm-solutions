/* eslint-disable no-unused-vars */
/*
An IP address is a numerical label assigned to
each device(e.g., computer, printer)
participating in a computer network that uses
the Internet Protocol for communication.There
are two versions of the Internet protocol, and
thus two versions of addresses.One of them is
the IPv4 address.
*/

// split the array string into an array at every '.'
// if length of array is not 4, return false
// loop through array
// convert element string into number
// check if number is less than 0
// or more than 255
// is NaN
// or is ''
// or if length is not 4
// finish the loop
// return true if the loop ran w/o being interrupted

function isIPv4Address(inputString) {
  const arr = inputString.split('.');
  if (arr.length !== 4) return false;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    let regex = /[A-Za-z]/g;
    if (number.match(regex) || number === '' || number > 255 || number < 0 || (number.indexOf(0) === 0 && number.length > 1)) return false;
    regex = /[0]/g;
    if (number.match(regex) && number.match(regex).length === number.length && number.length !== 1) return false;
  }

  return true;
}
