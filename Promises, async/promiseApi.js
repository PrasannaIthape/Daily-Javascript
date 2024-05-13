// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// Promise.all(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`11------------>${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         console.log(`14------------>${urls[num]}: ${result.reason}`);
//       }
//     });
//   });

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`23--------->${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         console.log(`26-------->${urls[num]}: ${result.reason}`);
//       }
//     });
//   });

// promise.all:
function hello(){
    return new Promise(()=>{
        console.log("Hello World!");
    });
}
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), hello()
    
    
  ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member


// Example:
  // get HSC marksheet
  // send mail to didi
// function getHSC(){
//     var HSC = 76;
//     return null;
// }

// function sendMail(hscRes){
//     console.log("HSC result is = ", hscRes);
// }

// var res = getHSC();
// if(res){
//     sendMail(res);
// }

// //
// function getHSCCallBack(callBackFn, myName){
//     var HSC = 76;
//     callBackFn(HSC);
// }

// getHSCCallBack(sendMail);