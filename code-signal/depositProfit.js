/* eslint-disable no-unused-vars */

/*
You have deposited a specific amount of money
into your bank account. Each year your balance
increases at the same growth rate. With the
assumption that you don't make any additional
deposits, find out how long it would take for your
balance to pass a specific threshold.
*/

// init count var = 0
// while deposit is less than threshold
// deposit becomes deposit + deposit x rate/100
// increment count
// exit loop
// return count

function solution(deposit, rate, threshold) {
  let count = 0;
  while (deposit < threshold) {
    count++;
    deposit = deposit + deposit * rate / 100;
  }
  return count;
}
