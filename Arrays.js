let marks = [75, 78, 65, 95, 90];
// marks[1]=76;
for( let idx=0;idx<marks.length;idx++){
    console.log(idx," ",marks[idx]);
}

// For of
for(let val of marks){
    console.log(val);
}

// avg of marks
let sum = 0;
for (let i of marks) {
  sum = sum + i;
}
console.log(`sum is ${sum} & Avg marks is:${sum / marks.length}`);
