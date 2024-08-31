//menubar
var menu=document.getElementById("menu")
var closeside=document.getElementById("closeside")
var sidebar=document.getElementById("sidebar")
menu.addEventListener("click",function(){
    sidebar.style.left=0
   
 
})
closeside.addEventListener("click",function(){
    sidebar.style.left="-50%"
})