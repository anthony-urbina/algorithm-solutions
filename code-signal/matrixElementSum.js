/* eslint-disable no-unused-vars */
/*
Given matrix, a rectangular matrix of integers,
where each value represents the cost of the room,
your task is to return the total sum of all rooms
that are suitable for the CodeBots
(ie: add up all the values that don't appear below a 0).
*/

/*
create foundZero var
create total var
loop through array
if index is equal to foundZero skip this iteration
if zero
save index to var foundZero
else
add to total
*/

function sumMatrixElements(matrix) {
  const foundZero = [];
  let total = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      else {
        total += matrix[j][i];
      }
    }
  }
  return total;
}
