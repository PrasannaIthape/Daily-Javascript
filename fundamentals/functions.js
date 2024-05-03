// function myFun() {
//   console.log("Kshitij Tarade");
// }
// myFun();

// // function with parameter
// function msg(a, b) {
//   let val = a + b;
//   return val;
// }
// let sum = msg(5, 5);
// console.log(sum);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permmission of parents?");
//   }
// }

// let age = prompt("How Old Are You?");

// if (checkAge(age)) {
//   alert("Access Granted");
// } else {
//   alert("Access Denied");
// }
// Arrow Function

// let age=prompt("Enter age:");
// let welcome=(age<18)?
// ()=>alert("hello"):
// ()=>alert("welcome");

// welcome();

// let sum=(a,b)=>{
//  let result=a+b;
//  return result;
// }
// let a=sum(2,3);
// document.write(a);
// sum(2,3);

let ask=(question, yes, no)=>{
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );