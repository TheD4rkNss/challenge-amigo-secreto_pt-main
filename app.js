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
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente
  
    for (let nome of amigos) { //cria um item de lista para cada nome
      const itemLista = document.createElement('li');
      itemLista.textContent = nome; //adiciona o nome ao item de lista
      itemLista.setAttribute('role', 'listitem'); //adiciona um atributo ao item de lista
      listaAmigos.appendChild(itemLista); //adiciona o item de lista à lista de amigos
    }
}

//Função que sorteia um amigo
function sortearAmigo() {
    if (amigos.length === 0) { //Verifica se a lista de amigos está vazia
      alert('Adicione amigos antes de sortear!');
      return;
    }
  
    const indiceSorteado = Math.floor(Math.random() * amigos.length); //sorteia um indice da lista de amigos
    const amigoSorteado = amigos[indiceSorteado];
  
    document.getElementById('resultado').innerHTML = `<p>O amigo sorteado foi: ${amigoSorteado}</p>`; //exibe o amigo sorteado
}