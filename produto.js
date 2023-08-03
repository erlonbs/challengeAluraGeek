var listaProduto = [];

produto1 = {
  id: 1,
  imagem: "../assets/images/starWars1.png",

  nome: "Produto XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"

};

produto2 = {
  id: 2,
  imagem: "../assets/images/starWars2.png",

  nome: "Produto XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"

};

produto3 = {
  id: 3,
  imagem: "../assets/images/starWars3.png",

  nome: "Produto XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"

};

produto4 = {
  id: 4,
  imagem: "../assets/images/starWars4.png",

  nome: "Produto XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
};

produto5 = {
  id: 5,
  imagem: "../assets/images/starWars5.png",

  nome: "Produto XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
};

produto6 = {
  id: 6,
  imagem: "../assets/images/starWars6.png",

  nome: "Produto XYe",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
};

listaProduto.push(produto1);
listaProduto.push(produto2);
listaProduto.push(produto3);
listaProduto.push(produto4);
listaProduto.push(produto5);
listaProduto.push(produto6);

// Função para inserir os dados usando JavaScript

function criarProduto() {
  var container = document.getElementById("lista__produtos");

  for (var i = 0; i < listaProduto.length; i++) {
    var item = document.createElement("div__produtos");
    var img = document.createElement("img");
    img.src = listaProduto[i].imagem;
    img.width = 177;
    img.height = 173;

    item.appendChild(img);

    var nome = document.createElement("p");
    nome.textContent = listaProduto[i].nome;
    nome.style.margin = 0;

    item.appendChild(nome);

    var preco = document.createElement("p");
    preco.style.fontWeight = '700';
    preco.style.margin = 0;
    preco.textContent = "R$ " + listaProduto[i].preco + ",00";

    item.appendChild(preco);

    var verProduto = document.createElement("a");

    verProduto.innerHTML = "Ver produto ";
    verProduto.textContent = "Ver produto ";
    verProduto.style.color = '#2A7AE4';
    verProduto.style.fontWeight = '700';
    verProduto.href = "/pages/produto.html?id=" + listaProduto[i].id;
    verProduto.style.textDecorationLine = 'none';
   
    item.appendChild(verProduto);

    container.appendChild(item);
  }
}

function voltar() {
  window.history.back();
}


function telaInicial() {
  window.location.href = "/index.html"
}

