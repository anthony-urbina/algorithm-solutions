/* eslint-disable no-unused-vars */
// create counter var
// create row [] var
// create board [] var
// loop through col
// loop through row
// check up, down, left, right
// check up-right, up-left, down-right, down-left
// for each true value
// add one to counter
// after each element, push counter to row then reset it to 0
// then move on to the next element in row and repeat
// exit inner loop
// push row to board []
// exit outer loop
// return board
/*
up c-1 , r
down c+1, r
left c, r-1
right c, r+1
ur c-1, r+1
ul c-1, r-1
dr c+1, r+1
dl c+1, r-1
*/
function mineSweeper(matrix) {
  const board = [];
  for (let c = 0; c < matrix.length; c++) {
    const row = [];
    for (let r = 0; r < matrix[c].length; r++) {
      const count = getCount(matrix, r, c);
      row.push(count);
    }
    board.push(row);
  }
  return board;
}

function getCount(matrix, r, c) {
  let counter = 0;
  if (matrix[c - 1] && matrix[c - 1][r]) counter++;
  if (matrix[c + 1] && matrix[c + 1][r]) counter++;
  if (matrix[c] && matrix[c][r - 1]) counter++;
  if (matrix[c] && matrix[c][r + 1]) counter++;
  if (matrix[c - 1] && matrix[c - 1][r + 1]) counter++;
  if (matrix[c - 1] && matrix[c - 1][r - 1]) counter++;
  if (matrix[c + 1] && matrix[c + 1][r + 1]) counter++;
  if (matrix[c + 1] && matrix[c + 1][r - 1]) counter++;

  return counter;
}
