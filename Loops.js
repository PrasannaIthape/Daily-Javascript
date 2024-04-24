// Loops:
// for loop,while,do while
// for of, for in

for (let i = 0; i < 5; i++) {
  console.log("i: ", i);
}

// calculate sum of 1 to 10
let sum = 0;

for (let n = 1; n <= 10; n++) {
  sum = sum + n;
}
console.log("sum : ", sum);

// while Loop
let i = 1;
let sum1 = 0;
while (i <= 20) {
  sum1 = sum1 + i;
  i++;
}
console.log("sum1 : ", sum1);

// FOR OF LOOP

let size = 0;
let name = "Prasanna";
for (let i of name) {
  console.log("i: ", i);
  size++;
}
console.log("String ", size);

// for in loop
let std = {
  name: "prasanna",
  lname: "ithape",
  age: 24,
};
for (let Key in std) {
  console.log("Key: ", Key, " value: ", std[Key]);
}

// print even no from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i, " is even no");
  }
}

// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value

let gameNo = 20;
let userNo = parseInt(prompt("Enter No"));
while(gameNo != userNo){
   userNo=parseInt(prompt("you choose wrong no try again"));
}
console.log("congrats you choose right no");

