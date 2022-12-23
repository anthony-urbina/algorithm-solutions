/* eslint-disable no-unused-vars */
/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/

// loop through array
// add '*' to start of element
// add '*' to end of element
// get length of first element
// while i is less than length of first element
// add a '*' to border
// push border to picture
// unshift border to picture
// return picture

function addBorder(picture) {
  const mappedPicture = picture.map(element => `*${element}*`);
  const length = mappedPicture[0].length;
  let border = '';
  let i = 0;
  while (i < length) {
    border += '*';
    i++;
  }
  mappedPicture.push(border);
  mappedPicture.unshift(border);
  return mappedPicture;
}

// found more concise solution
function solution(picture) {
  // can predict what length will be
  var width = picture[0].length + 2;
  return [
    // uses repeat to make border
    '*'.repeat(width),
    // spread syntax to access the elements of picture
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ];
}
