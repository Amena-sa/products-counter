var allproducts = document.querySelectorAll(".card .card-body .d-flex a")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btnprice")
var showprice = document.querySelector("#showprice")
var secondline = document.querySelector("#secondline")
var totalprice = 0
allproducts.forEach(function (item){
  
    item.onclick = function(){
        var price = item.getAttribute("price")
        var product = item.getAttribute("product")
        var img11 = item.getAttribute("img")
        totalprice += + (price)  
        div1.innerHTML +=  `<div class="d-flex justify-content-between p-2  text-dark rounded-3 mt-2 align-items-center w-100 slide m-auto">
        <img src="images/${img11}.png" class="img22 rounded" alt="">
        <h6 class="fs-6">${product}</h6><h6>${price}</h6></div> `
        if (div1.innerHTML != ""){
            btn1.style.display = "block";
            secondline.style.display = "block";
        }
    }
})
btn1.onclick = function(){
    showprice.innerHTML=totalprice + "$"
}

