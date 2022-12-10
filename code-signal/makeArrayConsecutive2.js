/* eslint-disable no-unused-vars */
/*
Ratiorg got statues of different sizes as a present from CodeMaster
for his birthday, each statue having an non-negative integer size.
Since he likes to make things perfect, he wants to arrange them from
smallest to largest so that each statue will be bigger than the previous
one exactly by 1. He may need some additional statues to be able to accomplish
that. Help him figure out the minimum number of additional statues needed.
*/

/*
create a container array
creata a missing variable
sort the array from least to greatest
loop through the array
evaulate elements two at a time
if delta between element a and element b is greater than 1
add the diff of b - a to missing

return delta
*/

function solution(statues) {
  const sorted = statues.sort((a, b) => a - b);
  let missing = 0;
  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const delta = b - a;
    if (delta > 1 && b !== undefined) {
      missing += delta - 1;
    }
  }
  return missing;
}
