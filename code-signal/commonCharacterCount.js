/* eslint-disable no-unused-vars */
/*
loop through both strings, turn them into objects

now i have objects
with keys and properties
that i have to compare

loop through obj1
if obj2 @ key
that means they both share the same letter
see who's count is smaller
add that number to total
finish the loop
return total
*/

function commonCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  let total = 0;
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (!obj1[letter]) {
      obj1[letter] = 1;
    } else {
      obj1[letter]++;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (!obj2[letter]) {
      obj2[letter] = 1;
    } else {
      obj2[letter]++;
    }
  }

  for (const key in obj1) {
    if (obj2[key]) {
      total += obj1[key] < obj2[key] ? obj1[key] : obj2[key];
    }
  }
  return total;
}
