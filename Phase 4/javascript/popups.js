// alert that just displays a message
//alert('Hey i am an alert');
let uname = prompt('enter your name', 'Guest')
var uc = confirm('Are you sure you want to exit');
if(uc)
    document.write("<p> We will miss you "+uname+" as you choose : "+uc+ " </h1>")
else
    document.write("<p> Right Choice "+ uname+" ahaaaa !! : "+uc+ " </h1>")


