
var listaConsole = [];


  console1 = {
    id:1,
    imagem: "../assets/images/console1.png",

    nome: "Controle XYZ",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"

  }

  console2 = {
    id:2,
    imagem: "../assets/images/console2.png",

    nome: "Controle e console XYZ",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
  }

  console3 = {
    id:3,
    imagem: "../assets/images/console3.png",

    nome: "Controle XYZ",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
  }

  console4 = {
    id:4,
    imagem: "../assets/images/console4.png",

    nome: "Controle XYZ",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
  }

  console5 = {
    id:5,
    imagem: "../assets/images/console5.png",

    nome: "Controle XYZ",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
  }

  console6 = {
    id:6,
    imagem: "../assets/images/console6.png",

    nome: "Game Boy Color",
    preco: 60.00,
    descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
  }

  listaConsole.push(console1);
  listaConsole.push(console2);
  listaConsole.push(console3);
  listaConsole.push(console4);
  listaConsole.push(console5);
  listaConsole.push(console6);

  // Função para inserir a imagem usando JavaScript

  function criarConsole(){

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
    preco.textContent = "R$ " + listaConsole[i].preco+',00';
    preco.style.fontWeight='700';
    item.appendChild(preco);

    container.appendChild(item);

    var verConsole = document.createElement('a');
    
    verConsole.innerHTML = "Ver produto"
    verConsole.textContent = "Ver produto ";
    verConsole.style.color ='#2A7AE4';
    verConsole.style.fontWeight ='700';
    verConsole.href = '/pages/console.html?id=' + listaConsole[i].id;

    item.appendChild(verConsole);

    container.appendChild(item)

  }


}
