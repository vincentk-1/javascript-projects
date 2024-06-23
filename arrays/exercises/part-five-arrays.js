let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); // Doesnt do anything
console.log(str.split('e')); // splits string at every instance of e 
console.log(str.split(' ')); // splits string at every spaced interval
console.log(str.split('')); // splits all string at every interval
console.log(str);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr);
console.log(arr.join());// Joins with commas
console.log(arr.join('a'));// Joins with a
console.log(arr.join(' '));// Joins with space
console.log(arr.join(''));// Joins without space
console.log(arr); // Doesn't change array in the end
//3) Do split or join change the original string/array?
//No 
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join());
console.log(cargoHold);