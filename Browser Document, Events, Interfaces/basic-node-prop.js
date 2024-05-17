// textContent: pure text
alert(news.textContent);

// innerHTML
// textContent
let name = prompt("Enter Your Name:", "<b>ithape</b>");
e1.innerHTML = name;
e2.textContent = name;

// The “hidden” property
e3.hidden = true;

// blinking element
setTimeout(() => 
  e4.hidden = !e4.hidden,2000);
