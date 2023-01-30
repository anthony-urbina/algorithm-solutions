/* eslint-disable no-unused-vars */
/*
 Given a sorted array of integers a, your task is to
determine which element of a is closest to all other
values of a. In other words, find the element x in
a, which minimizes the following sum:
 */

// create container object
// outer loop through array
// const x = array[i]
// create a diff variable
// inner loop through array
// const n = array[j]
// assign absolute differnce between x-n to diff
// when inner loop is at last index of array, push diff as the property of value x to object
// exit both loops
// create winner var
// create value var
// loop through container object
// the key with the smallest value wins
// if values are equal, return the smallest key
// return winner

function smallest(a) {
  const record = {};
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    let diff = 0;
    for (let j = 0; j < a.length; j++) {
      const n = a[j];
      diff += Math.abs(x - n);
      if (j === a.length - 1) {
        record[x] = diff;
      }
    }
  }
  let winner = null;
  let total = Infinity;
  for (const key in record) {
    if (record[key] < total) {
      total = record[key];
      winner = Number(key);
    } else if (record[key] === total) {
      winner = Number(key) > winner ? winner : Number(key);

    }
  }
  return winner;
}

// found a better solution than mine
// straight to the point
// gets diff and compares it to total immediatley
// instead of putting it in an object and comparing values later
function solution(a) {
  let winner = a[0];
  let total = Number.MAX_VALUE;

  for (let i = 0; i < a.length; i++) {
    let diff = 0;
    for (let j = 0; j < a.length; j++) {
      diff += Math.abs(a[j] - a[i]);
    }
    if (diff < total) {
      winner = a[i];
      total = diff;
    }
  }
  return winner;
}
