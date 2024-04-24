// Conditional Statements

let age = 18;
if (age >= 18) {
  console.log("Eligible");
}

// if else
let mode = "dark";
let color;
if (mode == "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

// Even Odd
let no=4;
// let no = parseInt(prompt("Enter Number: "));
if (no % 2 === 0) {
  console.log(no, " is even number");
  // alert(no," is even number");
} else {
  console.log(no, " is odd number");
  // alert(no," is odd number");
}

// ternary oper
let age1 = 24;
let result = age1 >= 18 ? "adult" : "not adult";
console.log(result);
