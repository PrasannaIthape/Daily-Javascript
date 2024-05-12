// class car{
//     constructor(name){
//         this.name=name;
//     }
//     static hello(){
//         return Hello;
//     }
// }
// let c=new car("bmw");
// // c.hello();
// console.log(c);

// Class extends Object?
class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  // hasOwnProperty method is from Object.prototype
  alert( rabbit.hasOwnProperty('name') );