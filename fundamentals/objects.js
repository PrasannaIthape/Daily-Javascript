//Objects
// let - variable/value can change
// const - value cannot change
// const key - can change

const Student = {
  fullName: "nikhil",
  age: 22,
  cgpa: 7.74,
  isPass: true,
};
console.log(Student);
console.log(Student["age"] + 1);

let userInfo = (a, b) => {
  console.log(a + b);
};
userInfo(3, 5);
// ----------------------------------------------------------------------------------------
// let user={
//     fname:"kshitij",
//     age:15,
//     marks:85
// }
// let result=prompt("What do you want to know about the user?");
// console.log(user[result]);

// Property existence test, “in” operator
// let user = { 
//     name: "John", 
//     age: 30 
// };

// alert("age" in user); // true, user.age exists
// alert("blabla" in user);


// Property value shorthand
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//     }
//   }
  
//   let user = makeUser("Ithape",24);
//   alert(user.name);

// ------------------------------------------------------------------------------
//   Object Copying
// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name);

// Cloning and merging, Object.assign
let user = {
    name: "ithape",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "prasanna"; // changed the data in it
  
  alert( user.name );

//   nested cloning
let user1 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( user1.sizes.height );

/**
 * object.assign
 * Structured clone
 * 
 * Arrow function have no this
 */