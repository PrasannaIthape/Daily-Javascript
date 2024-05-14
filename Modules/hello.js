// console.log(name);
// alert(name);
// hello.js should import it from user.js module.

import{uname} from './user.js';
console.log(uname);
document.body.innerHTML = uname;

import { admin,stdInfo} from './user.js';
// console.log(JSON.stringify(admin));
console.log(admin);
console.log(stdInfo("Aditya",95));