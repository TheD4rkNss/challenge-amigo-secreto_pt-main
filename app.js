//Array para armazenar os nomes
let amigos = [];

//Função que adiciona nomes ao array
function addAmigo(){
    let nome = document.getElementById('nome').value
    if (nome() == ''){
        amigos.push(nome);
}
    document.getElementById('nome').value = '';
    console.log(amigos)  //adicionado pra debugar, retirar depois de verificar o funcionamento
}