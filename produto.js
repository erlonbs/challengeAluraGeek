
var listaProduto = [];

function criarProduto() {
  produto1 = {
    imagem: "../assets/images/starWars1.png",

    nome: "Produto XYZ",
    preco: 60.00
    
  }

  produto2 = {
    imagem: "../assets/images/starWars2.png",

    nome: "Produto XYZ",
    preco: 60.00
  }

  produto3 = {
    imagem: "../assets/images/starWars3.png",

    nome: "Produto XYZ",
    preco: 60.00
  }

  produto4 = {
    imagem: "../assets/images/starWars4.png",

    nome: "Produto XYZ",
    preco: 60.00
  }

  produto5 = {
    imagem: "../assets/images/starWars5.png",

    nome: "Produto XYZ",
    preco: 60.00
  }

  produto6 = {
    imagem: "../assets/images/starWars6.png",

    nome: "Produto XYZ",
    preco: 60.00
  }

  listaProduto.push(produto1);
  listaProduto.push(produto2);
  listaProduto.push(produto3);
  listaProduto.push(produto4);
  listaProduto.push(produto5);
  listaProduto.push(produto6);

  // Função para inserir a imagem usando JavaScript

  var container = document.getElementById("lista__produtos")

  for (i = 0; i < listaProduto.length; i++) {
    var item = document.createElement("div__produtos");
    var img = document.createElement("img");
    img.src = listaProduto[i].imagem;
    img.width = 177;
    img.height = 173;

    item.appendChild(img);

    var nome = document.createElement("h2");
    nome.textContent = listaProduto[i].nome;

    item.appendChild(nome);

    var preco = document.createElement("p");
    preco.textContent = "Preço: R$" + listaProduto[i].preco;
    item.appendChild(preco);

    container.appendChild(item);


  }


}