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
