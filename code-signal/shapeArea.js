/* eslint-disable no-unused-vars */
/*
Below we will define an n-interesting polygon.
Your task is to find the area of a polygon for a given n.
*/

/*
1-interesting polygon is added to rim
increases area by n to the power of 2
that accounts for the rim
n-1 to the power of 2 for the inside
add both
return result
*/

function solution(n) {
  return Math.pow(n, 2) + Math.pow((n - 1), 2);
}
