var botaoBuscar = document.querySelector("#buscar-produtos");

botaoBuscar.addEventListener("click",function(){


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
      var resposta = xhr.responseText;
      console.log (resposta);
        var produto = JSON.parse(resposta);


        produto.forEach(function(produto){

          adcionaProdutoNaTabela(produto);
        })
    });

    xhr.send();


});
