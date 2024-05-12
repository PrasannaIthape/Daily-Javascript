// Solution 2: bind:
let user = {
  firstName: "John",
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser();
