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

// found solution that only uses 1 loop
function solution(a, b) {
  var i = 0;
  var length = a.length;
  var diff = [];

  for (; i < length; i++) {
    // If corresponding elements in a and b are not equal, push their
    // position to diff array to be used later.
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }

  // If there are no differences then the arrays are similar.
  if (diff.length === 0) {
    return true;
  }

  // If there are 2 differences, check to see if you would be able to swap the
  // elements to make the arrays equal.
  if (diff.length === 2) {
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
      return true;
    }
  }

  // If previous conditionals didn't return true, the arrays must not be similar.
  return false;
}
