/*
Given two strings, find the number
of common characters between them.
*/

/*
outer loop for string 1
inner loop for string 2
i need to know if s1 has two a's
and i need to know if s2 has two a's
if i loop through s1 (outer loop) and loop through s2 (inner loop)
i could identify if a char from s1 matches a char from s2
and just push any matches to their own containers
then if the letter appears again in s1
check to see if that letter is in the container
if it is, then that means it is in s1 a second time
so how do i deal with that
what happens if i push it to the container
which container
arent there two? do i even need two?

had another idea
commonChars var
1 outer loop
inside, check how many times s2 and s1 include it
save the var
if the vars are not null,
take the smallest, or if theyre equal
  add that number to commonChars
else if the vars are null do nothing -
*/

// function solution(s1, s2) {
// }
