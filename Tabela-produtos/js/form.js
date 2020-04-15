var botaoAdicionar = document.querySelector("#adicionar-produto");
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var produto = obtemProdutoDoFormulario(form);



  adcionaProdutoNaTabela(produto);



  form.reset();

});


function adcionaProdutoNaTabela(produto){
    var produtoTr = montaTr(produto);
    var tabela = document.querySelector("#tabela-produtos");
    tabela.appendChild(produtoTr);

}

function obtemProdutoDoFormulario(form){

    var produto = {
      nome:form.nome.value,
      preco:form.preco.value,
      quantidade:form.quantidade.value,
      markup:form.markup.value,
      valorRevenda: calculaRevenda(form.preco.value, form.markup.value)

}
      return produto;
}

function montaTr(produto){
    var produtoTr = document.createElement("tr");
    produtoTr.classList.add("produto");

        produtoTr.appendChild(montaTd(produto.nome, "info-nome"));
        produtoTr.appendChild(montaTd(produto.preco, "info-preco"));
        produtoTr.appendChild(montaTd(produto.quantidade, "info-quantidade"));
        produtoTr.appendChild(montaTd(produto.markup, "info-markup"));
        produtoTr.appendChild(montaTd(produto.valorRevenda, "info-revenda"));

        return produtoTr;
      }

      function montaTd(dado,classe){
          var td = document.createElement("td");
          td.textContent = dado;
          td.classList.add(classe);

          return td;

      }
