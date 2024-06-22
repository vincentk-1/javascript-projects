let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = strings;
	let output;
	//TODO: 2. write the code required for this step			
	for (let i=0; i<4;i++) {
		if (  check[i].includes(',') && !check[i].includes(', ')  ){ // Check for separation with commas without spaces
			output = check[i].split(',').reverse().join(",");  //split the string at each comma, reverse and join with comma	
			} 
	  } 
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check = strings;
	let output;
//TODO: write the code required for this step
for (let i=0; i<4;i++) {
	if (check[i].includes(';')){  // Check for separation with semi colon
		output = check[i].split(';').sort().join('-');  //split the string at each semi colon, alphabetize and join with hyphen		
		} 
  }  
	return output;
}

//4)
function reverseSpaces() {
	let check = strings;
	let output;
  //TODO: write the code required for this step
  for (let i=0; i<4;i++) {
  if (check[i].includes(' ') && !check[i].includes(',') ){  // Check for separation with spaces not including commas
	output = check[i].split(' ').sort().reverse().join(' ');  //split the string at each spacing, reverse alphabetize and join with space		
	} 
}
	return output;
}

//5)
function commaSpace() {
	let check = strings;
	let output;
	//TODO: write the code required for this step
	for (let i=0; i<4;i++) {
		if (check[i].includes(', ')){  // Check for separation with commas and spaces
			output= check[i].split(', ').reverse().join(',');  //split the string at each comma with space, reverse and join with comma	
			} 
	  }   
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
