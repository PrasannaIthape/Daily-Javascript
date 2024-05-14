export let uname = "Kshitij";
// user.js should export the user variable.

export let admin = {
  name: "prasanna",
  age: 24,
};

export function stdInfo(name, marks) {
  setTimeout(() => {
    console.log(`Name is: ${name} Marks is: ${marks}`);
  },2000);
}
// stdInfo("Aditya",95);
