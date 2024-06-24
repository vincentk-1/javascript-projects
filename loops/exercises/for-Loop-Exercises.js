//Exercise #1: Construct for loops that accomplish the following tasks:
  //  a. Print the numbers 0 - 20, one number per line.
    for (let i = 0; i <= 20; i++) {
   console.log(i);
} 
  //  b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i++) {
  if ( i % 2 === 1 ){
   console.log(i);
  }
} 
  //  c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  for (let i = 12; i >= -14; i--) {
    if ( i % 2 === 0 ){
     console.log(i);
    }
  } 
  //  d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
  for (let i = 50; i >= 20; i--) {
    if ( i % 3 === 0 ){
     console.log(i);
    }
  }
//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
let String1 = "LaunchCode"
let array1 = [1, 5, "LC101", "blue", 42]
//Construct ``for`` loops to accomplish the following tasks:
//  a. Print each element of the array to a new line.
  for (let i = 0; i < array1.length; i++) {
   console.log(array1[i]);
} 
 // b. Print each character of the string - in reverse order - to a new line. */ 
 for (let i = String1.length; i >=0;  i--) {
  console.log(String1[i]);
}
//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
//  a. One array contains the even numbers, and the other holds the odds.
let mixedArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let even = [];
let odd = [];
for (let i = 0; i < mixedArr.length; i++) {
  if ( mixedArr[i] % 2 === 0 ){
    even.push(mixedArr[i]);
   } else{
    odd.push(mixedArr[i]);
   }
}
//  b. Print the arrays to confirm the results.
console.log(`Even Array : ${even}`); 
console.log(`Odd Array : ${odd}`); 