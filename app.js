//Array para armazenar os nomes
let amigos = [];

//Função que adiciona nomes ao array
function addAmigo(){
    let nome = document.getElementById('nome').value //pega o valor do campo de texto
    if (nome.trim() !== ''){ //verifica se o campo está vazio e depois remove os esopaços em branco
        amigos.push(nome);
} else {
    alert('Por favor, insira um nome'); //alerta caso o campo esteja vazio
}
    document.getElementById('nome').value = ''; //limpa o campo após a inserção
    console.log(amigos)  //adicionado pra debugar, retirar depois de verificar o funcionamento
}