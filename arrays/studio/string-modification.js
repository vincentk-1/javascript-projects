const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
let str1 = str.slice(3,10)+str.slice(0,3)
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string, "${str}" was modified to "${str1}".`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("Enter the number of letters to be relocated :");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters>10){
    console.log(`Your request of ${numOfLetters} letters was modified to 3 letters.`);
    numOfLetters = 3
}
str1 = str.slice(numOfLetters,10)+str.slice(0,numOfLetters)
console.log(`The original string, "${str}" was modified to "${str1}".`);
