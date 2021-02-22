let cart_itens = [];

function Filter(n){
    for (let index = 0; index < 5; index++) {
        $('.'+(index + 1)).removeClass("active");
    }
    if(n != 'reset'){
        $('#maincontent').html("");
        $("."+n).addClass("active");
        products.forEach(function(item,index){
            if(item.category_id == n){
                $('#maincontent').append('<div class="col-sm-4"><div class="card" style="width: 18rem;"><img src="assets/'+products[index].path+'" class="card-img-top" alt="..."><div class="card-body">  <h5 class="card-title">'+products[index].name+'</h5>  <p class="card-text">'+products[index].description+'</p> <br> <b>R$</b>'+products[index].price+' <a href="#" class="btn btn-primary" onclick="buy('+products[index].id+')">Comprar</a></div></div></div>');
            }
          });
    }
    else{
        listAll();
    }
}

function buy(id){
    event.preventDefault();
    products.forEach(function(item,index){
        if(item.id == id){
            cart_itens.push(item);
            $("#carrinho").append("<li>"+item.name+" - R$"+item.price+"</li>");
        }
      });
}

function listAll()
{
    $('#maincontent').html("");
    for (let index = 0; index < 15; index++) {
        // $('#maincontent').append('<div class="col-sm-4"><div class="card" style="width: 18rem;"><img src="https://via.placeholder.com/300" class="card-img-top" alt="..."><div class="card-body">  <h5 class="card-title">Card title</h5>  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>  <a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>');
        $('#maincontent').append('<div class="col-sm-4"><div class="card" style="width: 18rem;"><img src="assets/'+products[index].path+'" class="card-img-top" alt="..."><div class="card-body">  <h5 class="card-title">'+products[index].name+'</h5>  <p class="card-text">'+products[index].description+'</p> <br> <b>R$</b>'+products[index].price+' <a href="#" class="btn btn-outline-danger" onclick="buy('+products[index].id+')">COMPRAR</a></div></div></div>');
    }
}

function finishShop(){
    console.log(cart_itens[0]);
    if(cart_itens[0] == undefined){
         return alert('Você deve colocar ao menos um produto no carrinho!')
    }
    let http_send = JSON.stringify(cart_itens);
    sessionStorage.setItem('cart_request', http_send);

    window.location.href = "checkout.html";

}

function enableSearch(){
    $("#pesquisa").keyup(function(){
        if($("#pesquisa").val() == ''){
            listAll();
        }
        else{
            $('#maincontent').html("");
            products.forEach(function(item,index){
                if(((item.name).toLowerCase()).includes(($("#pesquisa").val()).toLowerCase()) ){
                    $('#maincontent').append('<div class="col-sm-4"><div class="card" style="width: 18rem;"><img src="assets/'+products[index].path+'" class="card-img-top" alt="..."><div class="card-body">  <h5 class="card-title">'+products[index].name+'</h5>  <p class="card-text">'+products[index].description+'</p> <br> <b>R$</b>'+products[index].price+' <a href="#" class="btn btn-primary" onclick="buy('+products[index].id+')">Comprar</a></div></div></div>');
                }
            });
        }
    });
}

$( document ).ready(function() {
    enableSearch();
    listAll();
});



