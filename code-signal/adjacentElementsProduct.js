/* eslint-disable no-unused-vars */
/*
Given an array of integers, find the pair of
adjacent elements that has the largest product
and return that product.
*/

/*
create a largest variable set to -Infinity
loop though the array
evaluate the elements in pairs
multiply them and assing to product variable
if product is greater than largest
assign product to largest
*/

function getLargestProduct(inputArray) {
  let largest = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
}
