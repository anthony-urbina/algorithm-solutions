/* eslint-disable no-unused-vars */
// if myleft equals friendsleft and myright equals friendsright
// or myleft equals friendsright and myright equals friendsleft
// return true
// else return false

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (yourLeft === friendsLeft && yourRight === friendsRight) ||
    (yourRight === friendsLeft && yourLeft === friendsRight);
}
