// for (let i = 0; i < 3; i++) {
//   // shows 0, then 1, then 2
//   alert(i);
// }

/**
 * Let’s examine the for statement part-by-part:

part		
begin	let i = 0	Executes once upon entering the loop.
condition	i < 3	Checked before every loop iteration. If false, the loop stops.
body	alert(i)	Runs again and again while the condition is truthy.
step	i++	Executes after the body on each iteration.
 */

// let i = 5;
// i > 5 ? alert(i) : false;

/**
 * while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
 */

// let i;
// for(i=2;i<=20;i++){
//     if(i%2!==0){
//         alert(i);
//     }
// }

// convert for loop to while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
//   let i=0;
//   while(i<3){
//     alert( `number ${i}!` );
//     i++
//   }

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// let result = prompt("enter no:");
// if (result > 100) {
//   alert(`${result} guessed right no`);
// } else {
//   alert("you guessed wrong no! Try Again");
// }

let num;

do {
  num = prompt("Enter a number greater than 100?");
} while (num <= 100);
{
  alert(`${num} is greater than 100`);
}
