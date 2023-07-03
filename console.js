
var listaConsole = [];

function criarConsole() {
  console1 = {
    imagem: "../assets/images/console1.png",

    nome: "Controle XYZ",
    preco: 60.00
  }

  console2 = {
    imagem: "../assets/images/console2.png",

    nome: "Controle e console XYZ",
    preco: 60.00
  }

  console3 = {
    imagem: "../assets/images/console3.png",

    nome: "Controle XYZ",
    preco: 60.00
  }

  console4 = {
    imagem: "../assets/images/console4.png",

    nome: "Controle XYZ",
    preco: 60.00
  }

  console5 = {
    imagem: "../assets/images/console5.png",

    nome: "Controle XYZ",
    preco: 60.00
  }

  console6 = {
    imagem: "../assets/images/console6.png",

    nome: "Game Boy Color",
    preco: 60.00
  }

  listaConsole.push(console1);
  listaConsole.push(console2);
  listaConsole.push(console3);
  listaConsole.push(console4);
  listaConsole.push(console5);
  listaConsole.push(console6);

  // Função para inserir a imagem usando JavaScript

  var container = document.getElementById("lista__consoles")

  for (i = 0; i < listaConsole.length; i++) {
    var item = document.createElement("div__consoles");
    var img = document.createElement("img");
    img.src = listaConsole[i].imagem;
    img.width = 177;
    img.height = 173;

    item.appendChild(img);

    var nome = document.createElement("h2");
    nome.textContent = listaConsole[i].nome;

    item.appendChild(nome);

    var preco = document.createElement("p");
    preco.textContent = "Preço: R$" + listaConsole[i].preco;
    item.appendChild(preco);

    container.appendChild(item);


  }


}