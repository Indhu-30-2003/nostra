
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

// search bar
var productContainer = document.getElementById("product_container")
var search = document.getElementById("searchInput")
var productList = productContainer.getElementsByClassName("product1")
var result = document.getElementById("result")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for (count=0; count<productList.length; count=count+1){
        var productname = productList[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
            console.log("result")
              }

    }
})
//collections

document.addEventListener("DOMContentLoaded",()=>{
    var checkbox1=document.querySelectorAll(".checkbox")
    var product=document.querySelectorAll("#img_container")
    checkbox1.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filter();
        });
    });
    function filter() {
        var categories = []
        checkbox1.forEach(checkbox => {
            if (checkbox.checked) {
                categories.push(checkbox.value);
            }
        });

        product.forEach(product => {
            var productCategory = product.getAttribute('data-filter');
            if (categories.includes(productCategory)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});



