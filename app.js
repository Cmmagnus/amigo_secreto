// Lista de amigos e sorteados
let amigos = [];
let sorteados = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); // Remove espaços extras

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    return;
  }

  amigos.push(nome); // Adiciona o nome à lista
  atualizarLista(); // Atualiza o HTML
  input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa o conteúdo atual da lista

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botão para remover amigos da lista
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "REMOVER";
    botaoRemover.className = "button-remove";
    botaoRemover.onclick = () => removerAmigo(index);

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de realizar o sorteio.");
    return;
  }

  if (sorteados.length === amigos.length) {
    alert("Todos os amigos já foram sorteados!");
    return;
  }

  let amigoSorteado;

  // Tentar até encontrar um amigo que ainda não foi sorteado
  do {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceAleatorio];
  } while (sorteados.includes(amigoSorteado));

  sorteados.push(amigoSorteado); // Adiciona à lista de sorteados
  exibirResultado(amigoSorteado); // Mostra o resultado

  // Esconde a lista após o sorteio
  document.getElementById("listaAmigos").style.display = "none";
}

// Função para exibir o resultado do sorteio
function exibirResultado(nome) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nome} foi sorteado!</li>`;
}

// Opção para reiniciar o sorteio
function reiniciarSorteio() {
  sorteados = [];
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaAmigos").style.display = "block";
}

// Configuração inicial
document.addEventListener("DOMContentLoaded", () => {
  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.textContent = "Reiniciar Sorteio";
  botaoReiniciar.className = "button-restart";
  botaoReiniciar.onclick = reiniciarSorteio;

  const container = document.querySelector(".button-container");
  container.appendChild(botaoReiniciar);
});
