/* eslint-disable no-unused-vars */
/*
The pixels in the input image are
represented as integers. The algorithm
distorts the input image in the following way:
Every pixel x in the output image has a
value equal to the average value of the pixel
values from the 3 × 3 square that has its
center at x, including x itself. All the
pixels on the border of x are then removed.

Return the blurred image as an integer, with
 the fractions rounded down.
*/

/*
init blur []
loop through image rows, starting from 2nd row
init row []
loop through image columns, starting from 2nd column
get average of the 3x3 elements surrounding x, inlcuding x
floor average and push it to row []
exit column loop, push row [] to blur
exit row loop, return blur
*/

function boxBlur(image) {
  var blur = [];
  for (var i = 1; i < image.length - 1; i++) {
    var row = [];
    for (var j = 1; j < image[i].length - 1; j++) {
      var average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
      average += image[i][j - 1] + image[i][j] + image[i][j + 1];
      average += image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
      row.push(Math.floor(average / 9));
    }
    blur.push(row);
  }
  return blur;
}
