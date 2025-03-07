//Array para armazenar os nomes
let amigos = [];

//Função que adiciona nomes ao array
function adicionarAmigo(){
    let nome = document.getElementById('amigo').value //pega o valor do campo de texto
if (nome.trim() !== ''){ //verifica se o campo está vazio e depois remove os esopaços em branco
    amigos.push(nome);
    atualizarListaAmigos();
} else {
    alert('Por favor, insira um nome'); //alerta caso o campo esteja vazio
}
    document.getElementById('amigo').value = ''; //limpa o campo após a inserção
    console.log(amigos)  //adicionado pra debugar, retirar depois de verificar o funcionamento
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente
  
    for (let nome of amigos) {
      const itemLista = document.createElement('li');
      itemLista.textContent = nome;
      itemLista.setAttribute('role', 'listitem');
      listaAmigos.appendChild(itemLista);
    }
  }