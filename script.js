var isstatus=document.querySelector("h5");
var addfriend=document.querySelector("#add");
var removefriend=document.querySelector("#remove")

addfriend.addEventListener("click",function(){
    isstatus.innerHTML="Friends"
    isstatus.style.color="green"
})
removefriend.addEventListener("click",function(){
    isstatus.innerHTML="Stranger"
     isstatus.style.color="red"
})