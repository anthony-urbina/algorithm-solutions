// eslint-disable-next-line no-unused-vars
function rearrange(inputArray) {
  // array of equal length strings
  // possible to rearrande order of strings so that each
  // consecutive pair differs by exactly 1 character
  // return true if possible, false if not

  // figure out all possible combinations
  // loop through each combination
  // if one differs by 1, return true, else return false

  const allCombinations = permutator(inputArray);

  for (let i = 0; i < allCombinations.length; i++) {
    const arr = allCombinations[i];
    if (check(arr)) return true;
  }
  return false;
}

function diff(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) count++;
  }
  return count;
}

function check(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const s1 = arr[i];
    const s2 = arr[i + 1];
    if (diff(s1, s2) !== 1) return false;
  }
  return true;
}

function permutator(inputArr) {
  const results = [];

  function permute(arr, memo) {
    let cur;
    memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
