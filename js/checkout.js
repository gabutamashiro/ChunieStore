let products = JSON.parse(sessionStorage.getItem('cart_request'));

console.log(products)

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

function formValidation(){
    if($("input#firstName").val() == '' || $("input#lastName").val() == '' || $("input#username").val() == '' || $("input#email").val() == '' || $("input#address").val() == '' || $("input#state").val() == '' || $("input#zip").val() == ''){
        return false;
    }
    else{
        return true;
    }
}

function finish(){
    var result = formValidation();
    if(result == true){
        let save_name = $("input#firstName").val() + " " + $("input#lastName").val();
        
        let http_send = JSON.stringify(products);
        sessionStorage.setItem('cart_request', http_send);
        sessionStorage.setItem('save_name', save_name);
    
    
    
        window.location.href = "finish.html";
    }
    else{
        alert('Preencha todos os campos')
    }
}

$(document).ready(function(){
    totalPrice();
    showProducts();
});
