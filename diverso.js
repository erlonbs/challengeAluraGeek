
var listaDiverso = [];

function criarDiverso() {
  diverso1 = {
    imagem: "../assets/images/starWars1.png",

    nome: "Camisa Atari",
    preco: 60.00
  }

  diverso2 = {
    imagem: "../assets/images/starWars2.png",

    nome: "Camisa SNES",
    preco: 60.00
  }

  diverso3 = {
    imagem: "../assets/images/starWars3.png",

    nome: "Controle e console XYZ",
    preco: 60.00
  }

  diverso4 = {
    imagem: "../assets/images/starWars4.png",

    nome: "Controle e console XYZ",
    preco: 60.00
  }

  diverso5 = {
    imagem: "../assets/images/starWars5.png",

    nome: "Controle e console XYZ",
    preco: 60.00
  }

  diverso6 = {
    imagem: "../assets/images/starWars6.png",

    nome: "Produto",
    preco: 60.00
  }

  listaDiverso.push(diverso1);
  listaDiverso.push(diverso2);
  listaDiverso.push(diverso3);
  listaDiverso.push(diverso4);
  listaDiverso.push(diverso5);
  listaDiverso.push(diverso6);

  // Função para inserir a imagem usando JavaScript

  var container = document.getElementById("lista__diversos")

  for (i = 0; i < listaDiverso.length; i++) {
    var item = document.createElement("div__diversos");
    var img = document.createElement("img");
    img.src = listaDiverso[i].imagem;
    img.width = 177;
    img.height = 173;

    item.appendChild(img);

    var nome = document.createElement("h2");
    nome.textContent = listaDiverso[i].nome;

    item.appendChild(nome);

    var preco = document.createElement("p");
    preco.textContent = "Preço: R$" + listaDiverso[i].preco;
    item.appendChild(preco);

    container.appendChild(item);


  }


}