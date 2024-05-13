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
