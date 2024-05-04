// ARRAY
// let marks=[70,75,80,85,95];{
//     console.log(marks);
// }

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// let items=[100,200,50,300,140];{
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;

//     console.log(items[i]);
// }
// }

// Example ->
// let store=["bloomberg","microsoft","uber","google","IBM","netflix"];

// // let val=store.pop(0); //delete last value
// // store.shift();
// store.splice(2,1,"ola");
// store.push("Amazon");

// console.log(store);

// Array methods
/**
 * arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
 */
let fruits = ["Apple", "Orange", "Plum"];
fruits[2] = "mango";
console.log(fruits);
console.log("array length:" + fruits.length);
console.log(fruits.pop());
console.log(fruits.push("banana"));
console.log(fruits);
