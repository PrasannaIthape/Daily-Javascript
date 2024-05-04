// Date Creation
let now = new Date();
alert( now ); 

/**
 * Access date components
There are methods to access the year, month and so on from the Date object:

getFullYear()
Get the year (4 digits)
getMonth()
Get the month, from 0 to 11.
getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
Get the corresponding time components.
 */

let date = new Date();

// the hour in your current time zone
console.log( date.getHours() );