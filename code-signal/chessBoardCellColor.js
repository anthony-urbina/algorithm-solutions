/* eslint-disable no-unused-vars */

// Given two cells on the standard chess board,
// determine whether they have the same color or not.

// const cells = [cell1, cell2]
// create a cells array
// init color var = null
// loop through cells array
// if letter is a, c, e,g and number is 1,3,5,7
// or letter is b, d, f,h and number is 2,4,6 8
// if color is already equal to brown return true, if already equal to white return false
// color = brown
// else
// color = white
// but if color is already equal to white return true, if it's already equal to brown return false

function chessBoardCellColor(cell1, cell2) {
  const cells = [cell1, cell2];
  let color = null;
  for (let i = 0; i < cells.length; i++) {
    const letter = cells[i][0];
    const num = cells[i][1];
    if (((letter === 'A' || letter === 'C' || letter === 'E' || letter === 'G') && (parseInt(num) === 1 || parseInt(num) === 3 || parseInt(num) === 5 || parseInt(num) === 7)) || ((letter === 'B' || letter === 'D' || letter === 'F' || letter === 'H') && (parseInt(num) === 2 || parseInt(num) === 4 || parseInt(num) === 6 || parseInt(num) === 8))) {
      if (color === 'brown') return true;
      if (color && color !== 'brown') return false;
      color = 'brown';
    } else {
      if (color === 'white') return true;
      if (color && color !== 'white') return false;
      color = 'white';
    }
  }
}

// found a better solution
function solution(cell1, cell2) {
  // creates board object where they assign numbers to board letters
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };
  // adds cell letter with cell board corresponding number
  const total1 = board[cell1[0]] + parseInt(cell1[1]);
  const total2 = board[cell2[0]] + parseInt(cell2[1]);
  // if the total is divisible by 2, return true
  // else return false
  return total1 % 2 === total2 % 2;
}
// works because they alternate even and odds between the letters
// this represents the alternating pattern of dark and light squares
