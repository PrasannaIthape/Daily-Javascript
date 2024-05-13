// // let promise=new Promise((resolve,reject)=>{
// //     console.log("i am a promise");
// //     reject("some error occurred");
// // });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 4000);
//   });
// }
// // getData(123);

// let result = getData(123);
// console.log(result);

// then and catch

// let getPromise = () => {
//   return new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("netwok error");
//   });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled");
// });
// promise.catch((err)=>{
//     console.log("error",err);
// });

// chaining

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("success");
    }, 6000);
  });
}
var allP = Promise.all([ asyncFunc1(), asyncFunc2() ]);
console.log("data all = ", allP);
//console.log("Fetching Data1...");
// let p1 = asyncFunc1();
// asyncFunc1.then(()=>{

// })
// p1.then(() => {
//   console.log("Fetching Data2...");
//   let p2 = asyncFunc2();
//   p2.then(() => {});
// });

// 
// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise
