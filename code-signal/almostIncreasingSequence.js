/* eslint-disable no-unused-vars */
/*
Given a sequence of integers as an array,
determine whether it is possible to obtain
a strictly increasing sequence by removing
no more than one element from the array.
*/

/*
create a counter variable
loop through elements in the array
a = i
b = i + 1
if b is not greater than a
add 1 to the counter
loop through all elements
if counter is greater than 1
return false
else return true
*/

function checkSequence(sequence) {
  let counter = 0;
  const container = [];
  for (let i = 0; i < sequence.length; i++) {
    const a = sequence[i];
    const b = sequence[i + 1];
    if (b > a || i === sequence.length - 1) {
      container.push(a);
    } else {
      container.push(a);
      i++;
      counter++;
    }
  }

  for (let i = 0; i < container.length; i++) {
    const a = container[i];
    const b = container[i + 1];
    if (b <= a) {
      counter++;
    }
  }

  if (counter > 1) {
    return false;
  } else {
    return true;
  }
}
