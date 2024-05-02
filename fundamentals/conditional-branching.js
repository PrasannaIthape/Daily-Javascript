// Multiple ‘?’
// A sequence of question mark operators ? can return a value that depends on more than one condition.
let age = prompt("age?", 18);

let message =
  age < 3 ? "Hi, baby!": age < 18 ? "Hello!": age < 100 ? "Greetings!": "What an unusual age!";

alert(message);
