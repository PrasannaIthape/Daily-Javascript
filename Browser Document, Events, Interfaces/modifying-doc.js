let div=document.createElement("div");

div.className="alert";

div.innerHTML="<b>Hi there </b> You've read a strong message"

let p=document.getElementsByClassName("alert");
// alert(p);
document.body.append(div);
// Node removal
setTimeout(()=>div.remove(),4000);