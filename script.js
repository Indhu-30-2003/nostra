//offerpopup
var offerpop=document.getElementById("offerpop")
var parax=document.getElementById("parax")
parax.addEventListener("click",function(){
    offerpop.style.display="none"
})

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

/* //slidebar
  const imgcontainer=document.getElementById("image")
 const btns=document.querySelectorAll(".btn")
 
 const imgList=["slider-one", "Online-fashion-retailers" , "slider-one 3"]


let index=0
 btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
           index--;
           if(index<0){
            index=imgList.length-1;
           }
           imgcontainer.style.background=`  url("image/${imgList[index]}.jpg")  cover no-repaet  `
        }
        else{
            index++;
           if(index==imgList.length){
            index=0;
           }
           imgcontainer.style.background=`  url("image/${imgList[index]}.jpg") cover no-repaet `
        }
    })
 }) 
  
 
 */
/*  var likebuttons=document.querySelectorAll(".heart")

 likebuttons.forEach((btn)=>{
     btn.addEventListener("click",function(e){
         if(e.target.src.indexOf("black heart")>0)
         {
             e.target.src="./image/red heart.png"
         }
         else{
             e.target.src="./image/black heart.png"
         }
     })
    }) */