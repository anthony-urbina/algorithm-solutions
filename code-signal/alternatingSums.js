/* eslint-disable no-unused-vars */
/*
Several people are standing in a row and need to be
divided into two teams. The first person goes into
team 1, the second goes into team 2, the third goes
into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the
weights of the people. Return an array of two integers,
where the first element is the total weight of team 1,
and the second element is the total weight of team 2
after the division is complete.
*/
// loop through array
// init team 1
// init team 2
// if index modulus 2  is 0, add element to team 1
// else, add element to team 2
// return [team1, team2]

function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }
  return [team1, team2];
}
