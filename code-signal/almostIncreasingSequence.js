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

/*
by removing no more than 1 element in the array
if b - a is a negative number or equal to 0
counter++
if the element before a is less than a
keep a
else if the element after b is greater than b
keep b
else if they are equal
keep a
*/

function checkSequence(sequence) {
  let counter = 0;
  const container = [];
  for (let i = 1; i < sequence.length; i++) {
    const beforePrevious = sequence[i - 2];
    const previous = sequence[i - 1];
    const current = sequence[i];
    const afterCurrent = sequence[i + 1];

    if (previous >= current) {
      counter++;
      if (current <= beforePrevious && afterCurrent <= previous) return false;

    }
  }
  return !(counter > 1);
}
