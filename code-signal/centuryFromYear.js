/*
Given a year, return the century it is in.
The first century spans from the year 1 up to and
including the year 100, the second - from the year 101
up to and including the year 200, etc.
*/

/*
divide year by 100
round up to nearest Int to get century
return century
*/

export default function getCentury(year) {
  const decimal = year / 100;
  const century = Math.ceil(decimal);
  return century;
}
