// Modifiers: shift, alt, ctrl and meta
// button.onclick = function (event) {
//   if (event.altkey && event.shiftkey) {
//     alert('hello');
//   }
// };
button.onclick = function (event) {
  if (event.altKey && event.shiftKey) {
    alert("Hooray!");
  }
};

function add(age) {
  setTimeout(() => {
    if (age > 18) {
      setTimeout(() => {
        document.write(`You Are Eligible`);
      }, 4000);
    }
    else{
        setTimeout(()=>document.write("you are not eligible"),2000);
    }
  });
}
add(19);
