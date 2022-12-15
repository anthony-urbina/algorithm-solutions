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

// found a better solution than mine

function solution(s1, s2) {
  // loops through s1
  for (var i = 0; i < s1.length; i++) {
    // replace method replaces param1 with param2 then returns a new string
    // if an s1 letter is found in s2 it will get replaced by a '!'
    s2 = s2.replace(s1[i], '!');
  }
  // count the "!'s" and return them
  return s2.replace(/[^!]/g, '').length;
}
