let products = JSON.parse(sessionStorage.getItem('cart_request'));
let name_request = sessionStorage.getItem('save_name');

var somatotal = 0;

function totalPrice(){
    products.forEach(function(item,index){
        somatotal += parseFloat(item.price);
       });
     $("#totalprice").html("R$"+somatotal)
}

function showProducts(){
    products.forEach(function(item){
     $("#products").append('<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">'+item.name+'</h6><small class="text-muted">'+item.description+'</small></div><span class="text-muted">R$'+item.price+'</span></li>');
   });
}

function calcShipping(max = 15, min = 1){ 
    return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
    let base_frete = calcShipping();
    totalPrice();
    showProducts();
    $("#nome").html(name_request);
    $("#frete").html(base_frete+" à "+(base_frete + calcShipping()))
});
