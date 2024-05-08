function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

// 
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6

//   Spread syntax
alert( Math.max(3, 5, 1) );

// We also can pass multiple iterables this way

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); 