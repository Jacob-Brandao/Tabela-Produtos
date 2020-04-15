var titulo = document.querySelector(".titulo");
titulo.textContent="Casa do Nerd Maceió";
titulo.style.color ="yellow"

var tituloTabela = document.querySelector(".titulotabela");
tituloTabela.textContent="Meus Produtos";
tituloTabela.style.color = "Blue"

var produtos = document.querySelectorAll(".produto");

for(var i = 0; i < produtos.length ; i++){

produto = produtos[i];


  var tdPreco = produto.querySelector(".info-preco");
  var preco =tdPreco.textContent;

  var tdMarkup = produto.querySelector(".info-markup");
  var markup = tdMarkup.textContent;

  var tdQuantidade = produto.querySelector(".info-quantidade");
  var quantidade = tdQuantidade.textContent

  var valorRevenda = calculaRevenda(preco,markup);
  var tdValorRevenda = produto.querySelector(".info-revenda");

  tdValorRevenda.textContent = valorRevenda;

}

function calculaRevenda(preco,markup){
  var revenda = 0;
  revenda = preco * markup;
  return revenda.toFixed(2);
}
