/**
 * We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
There are two methods for it:
setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
 */

// setTimeout
// The syntax:

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// function sayHi() {
//   alert("Hello");
// }
// setTimeout(sayHi, 1000);

// with arguments:
// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }

//   setTimeout(sayHi, 1000, "Hello", "John");

// setInterval:
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 5000);
