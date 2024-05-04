// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false

//
// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }

//     this.name = name;
//   }

//   let john = User("John"); // redirects call to new User
//   alert(john.name);

//   Methods in constructor
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi();
