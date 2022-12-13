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
beforePrevious = sequence @ i - 2
previous = sequence @ i - 1
current = sequence @ i
afterCurrent = sequence @ i + 1
if current is equal to or less than previous
add 1 to the counter
check if current is less than or equal to beforePrevious
check if previous is greater than or equal to afterCurrent
if true return false
exit loop
if counter is greater than 1 return false
else return true
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
