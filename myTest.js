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
// let sorry = [11, 18, 19, 20, 21];
// let arr = [];

// function check() {
//   for (let i of sorry) {
//     if (i % 2 !== 0) {
//     //   console.log(i);
//       arr.push(i)
//     }
//   }
//   return arr;
// }
// let op=check();
// console.log(op)

/**
 * 1) check array numbers are divisible by 10. Input- [ 1,2,3,4,50]
 * 2) filter array numbers greater than 20. Input- [ 10, 20, 5, 22, 40]
 * 3) write a function to check array numbers are prime or not. Input - [ 2, 4, 5, 8, 11, 13 ]
 */
// // the no is divisible by 1 and this no
// let arr = [2, 4, 5, 8, 11, 13, 21];
// // for (let i = 0; i < arr.length; i++) {

// // }

// for (let i of arr) {
//   if (i % arr[i] == 0) {
//     console.log(i);
//   }
// }

// var myArray = [1, 2, 3, 4, 50, 40];
// var check = function (number) {
//   //   return number % 10 == 0;
//   if (number % 10 == 0) {
//     return number;
//   }
// };
// var checkNo = function (arr, fn) {
//   let result = [];
//   for (let i in myArray) {
//     let value = check(myArray[i]);
//     if (value) {
//       result.push(value);
//     }
//   }
//   console.log("divisible by 10=", result);
// };
// // let op = checkNo(myArray, check);
// // console.log(op);
// checkNo(myArray, check);
// // console.log(checkNo(myArray , check)    );
// check1();
// function check1() {
//   let arr1 = [10, 20, 5, 22, 40];
//   let arr = [];
//   for (let i of arr1) {
//     if (i > 20) {
//       arr.push(i);
//     }
//   }
//   console.log("greater than 20 = ", arr);
//   return arr;
// }
// check1(arr1);

// let n = 11;
// let isPrime = `${n} is prime number`;
// if (n == 1 || n == 2) {
//     isPrime = `${n} is prime number`;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrime = `${n} is not a prime number`;
//       break;
//     }
//   }
// }
// console.log(isPrime);

/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 * 1 2 3 4 5 6
 */

// for(let i=1;i<=6;i++){
//     if(i==i){
//         console.log(i)
//     }
//     for(let j=1;j<=i;j++){
//         console.log(j);
//     }
// }
// for (let i = 1; i <= 6; i++) {
//     let ptrn = ' ';
//     for (let j = 1; j <= i; j++) {
//         ptrn=ptrn+ j;
//     }
//     console.log(ptrn);
// }

