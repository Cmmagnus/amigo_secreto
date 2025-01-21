// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  let nome = document.getElementById("amigo").value;

  // Validação para garantir que o nome não esteja vazio
  if (nome.trim() === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);

  // Limpa o campo de entrada após adicionar
  document.getElementById("amigo").value = "";

  // Atualiza a lista de amigos
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
  // Obtém o elemento da lista
  let lista = document.getElementById("listaAmigos");

  // Limpa a lista antes de adicionar novos elementos
  lista.innerHTML = "";

  // Percorre o array de amigos e adiciona cada nome à lista
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo aleatório
function sortearAmigoAleatorio() {
  // Verifica se há amigos no array
  if (amigos.length === 0) {
    alert("Não há amigos disponíveis para sorteio.");
    return;
  }

  // Gera um índice aleatório entre 0 e o tamanho do array menos 1
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado usando o índice aleatório
  let amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado no elemento de resultado
  let resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

  // Remove o nome sorteado do array para que não seja sorteado novamente
  amigos.splice(indiceAleatorio, 1);

  // Atualiza a lista de amigos (a lista exibida e o array de amigos)
  atualizarListaAmigos();
}
