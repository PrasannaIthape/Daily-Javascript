// // callbacks

// function loadScript(src,callback){
//     let script=document.createElement("script");
//     script.src=src;
//     // script.callback=callback;
//     script.onload=function(){
//             console.log(`script is loaded wth src: ${src}`);
//             // console.log(`script is loaded wth src: ${callback}`);
//             callback();
//     }
//     document.body.appendChild(script);
// }
// function hello(){
//     alert(`hello`);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);

// ---------
// Asyncronous
function hello(){
    console.log(`hello`);
}
setTimeout(hello,3000);

// Callback : 
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function add(a,b){
    console.log(a+b)
}
function sum(a,b,calculate){
    calculate(a,b);
}
sum(1,2,add);