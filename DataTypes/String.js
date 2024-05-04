let str="Prasanna Ithape      ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());//remove whitespaces
console.log(str.length);

// String Methods

let str1="Ithape";
let str2="Prasanna";
console.log(str1.slice(0,3));
console.log(str1.concat(str2));
console.log(str2.replace("Prasa","a"));
console.log(str2.charAt(2));

// . Prompt the user to enter their full name. Generate a username for them based on the input
// Start username with @, followed by their full name and ending with the fullname length.


let fName=prompt("Enter Name: ");
console.log("User Name: "+"@"+fName+fName.length);