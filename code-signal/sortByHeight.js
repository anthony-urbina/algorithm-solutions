/* eslint-disable no-unused-vars */
/*
Some people are standing in a row in a park.
There are trees between them which cannot be
moved. Your task is to rearrange the people by
their heights in a non-descending order without
moving the trees. People can be very tall!
*/

/*
create copy of array
create container
loop through array
if element[i] = -1, push i to the container and remove the element from the copy array
exit loop
sort array of heights, non-descending order
loop through container
add -1 to the copy array at the index of element[i]
exit loop
return copy array
*/

function sortByHeight(a) {
  const copyOfA = [...a];
  const container = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      copyOfA.splice(i - container.length, 1);
      container.push(i);
    }
  }

  const sorted = copyOfA.sort((a, b) => a - b);

  for (let i = 0; i < container.length; i++) {
    const index = container[i];
    copyOfA.splice(index, 0, -1);
  }
  return copyOfA;
}

// found a solution that is better than mine
function solution(a) {
  // pushes all non-tree numbers to people array
  var people = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      people.push(a[i]);
    }
  }
  // sorts people height in ascending order
  people.sort(function (a, b) {
    return a - b;
  });
  // loops through original array
  // if element is not a tree, replace it with the first element from the people array
  for (var j = 0; j < a.length; j++) {
    if (a[j] > 0) {
      a[j] = people.shift();
    }
  }

  return a;
}
// this was an overall better solution because they took the more practical
// approach of moving the humans, whereas i moved the trees
