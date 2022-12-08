// Given the string, check if it is a palindrome.

/*
create a container
loop through the word starting from the last index
push each index to the container
when loop is finished, compare word to container
if equal, it's a palindrome
else, it's not
*/

export default function checkPalindrome(word) {
  let container = '';
  for (let i = 0; i < word.length; i++) {
    container += word[word.length - i - 1];
  }
  if (container === word) {
    return true;
  } else {
    return false;
  }
}
