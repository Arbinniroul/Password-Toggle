let img=document.getElementById("img");
let input=document.getElementById("input");
function replace(){
    if(input.type=="password"){
        img.src="images/eye-open.png";
        input.type="text";
    }
    else{
    img.src="images/eye-close.png";
    input.type="password";
    }
}