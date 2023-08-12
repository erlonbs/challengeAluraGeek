
var listaDiverso = [];


diverso1 = {
  id: 1,
  imagem: "assets/images/diverso1.png",

  nome: "Camisa Atari",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

diverso2 = {
  id: 2,
  imagem: "assets/images/diverso2.png",

  nome: "Camisa SNES",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

diverso3 = {
  id: 3,
  imagem: "assets/images/diverso3.png",

  nome: "Controle e console XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

diverso4 = {
  id: 4,
  imagem: "assets/images/diverso4.png",

  nome: "Controle e console XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

diverso5 = {
  id: 5,
  imagem: "assets/images/diverso5.png",

  nome: "Controle e console XYZ",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

diverso6 = {
  id: 6,
  imagem: "assets/images/diverso6.png",

  nome: "Produto",
  preco: 60.00,
  descricao: "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus"
}

listaDiverso.push(diverso1);
listaDiverso.push(diverso2);
listaDiverso.push(diverso3);
listaDiverso.push(diverso4);
listaDiverso.push(diverso5);
listaDiverso.push(diverso6);

// Função para inserir a imagem usando JavaScript

function criarDiverso() {

  var container = document.getElementById("lista__diversos")

  for (i = 0; i < listaDiverso.length; i++) {
    var item = document.createElement("div__diversos");
    var img = document.createElement("img");
    img.src = listaDiverso[i].imagem;
    img.width = 177;
    img.height = 173;

    item.appendChild(img);

    var nome = document.createElement("p");
    nome.textContent = listaDiverso[i].nome;
    nome.style.margin = 0;
    item.appendChild(nome);

    var preco = document.createElement("p");
    preco.textContent = "R$ " + listaDiverso[i].preco + ",00";
    preco.style.fontWeight = '700';
    preco.style.margin = 0;
    item.appendChild(preco);

    container.appendChild(item);
    var verDiverso = document.createElement("a");

    verDiverso.innerHTML = "Ver produto ";
    verDiverso.textContent = "Ver produto ";
    verDiverso.style.color = '#2A7AE4';
    verDiverso.style.fontWeight = '700';
    verDiverso.href = "./pages/diverso.html?id=" + listaDiverso[i].id;
    verDiverso.style.textDecorationLine = 'none';
   
    item.appendChild(verDiverso);

    container.appendChild(item);

  }


}