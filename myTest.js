/**
 * Write a function to check given number is odd or even
 * Input - take a value from user
 */
// let no=prompt("Enter Number");
// function check(no){
//     if(no%2==0){
//         // console.log(`Number is Even ${no}`);
//         return true;
//     }
//     else{

//         //console.log(`Number is odd ${no}`);
//         return false;
//     }
// }
// var output = check(no);

/**
 * Write a function to check get odd numbers from array
 * Input - [11,18,19,20,21]
 */
let sorry = [11, 18, 19, 20, 21];
let arr = [];

function check() {
  for (let i of sorry) {
    if (i % 2 !== 0) {
    //   console.log(i);
      arr.push(i)
    }
  }
  return arr;
}
let op=check();
console.log(op)

/**
 * 1) check array numbers are divisible by 10. Input- [ 1,2,3,4,50]
 * 2) filter array numbers greater than 20. Input- [ 10, 20, 5, 22, 40]
 * 3) write a function to check array numbers are prime or not. Input - [ 2, 4, 5, 8, 11, 13 ] 
 */