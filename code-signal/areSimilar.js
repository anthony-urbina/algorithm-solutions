/* eslint-disable no-unused-vars */
/*
Two arrays are called similar if one can be obtained from
another by swapping at most one pair of elements in one of the arrays.
Given two arrays a and b, check whether they are similar.
*/

// create container []
// loop through a
// if a[i] does not equal b[i]
// unshift a[i] to container and replace it with a '!'
// repeat for each element
// loop through a again
// if a[i] equals '!'
// replace it with container[container0]
// remove the element from the container
// loop through all elements
// if a equals b return true
// else return false

function areSimilar(a, b) {
  const container = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      container.unshift(a[i]);
      a[i] = '!';
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === '!') {
      a[i] = container.shift();
    }
  }

  return a.toString() === b.toString();
}
