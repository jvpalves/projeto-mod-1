const nomeCompletoJogador1 = "Cristiano Ronaldo";
const idadeJogador1 = 38
const alturaJogador1 = 183;
const nacionalidadesJogador1 = ["Portugal", "Espanha"]
const isJogandoJogador1 = true


const nomeCompletoJogador2 = "Lionel Messi";
const idadeJogador2 = 35
const alturaJogador2 = 169;
const nacionalidadesJogador2 = ["Argentina", "Espanha"]
const isJogandoJogador2 = true

const nomeCompletoJogador3 = "Thiago Alcântara";
const idadeJogador3 = 32
const alturaJogador3 = 172;
const nacionalidadesJogador3 = ["Itália", "Brasil", "Espanha"];
const isJogandoJogador3 = true

const objetoJogador1 = {
    nome: nomeCompletoJogador1,
    idade: idadeJogador1,
    altura: alturaJogador1,
    nacionalidades: nacionalidadesJogador1,
    isJogando: isJogandoJogador1,
    img: "https://sortitoutsi.net/uploads/extractedfiles/TMwR5ySgzqFrmQ8vOXhMKSvRHG4jn83e/R.%20Madrid%20cut%20out/735216.png"

}

const objetoJogador2 = {
    nome: nomeCompletoJogador2,
    idade: idadeJogador2,
    altura: alturaJogador2,
    nacionalidades: nacionalidadesJogador2,
    isJogando: isJogandoJogador2,
    img: "https://sortitoutsi.net/uploads/face/7458500.png"

}

const objetoJogador3 = {
    nome: nomeCompletoJogador3,
    idade: idadeJogador3,
    altura: alturaJogador3,
    nacionalidades: nacionalidadesJogador3,
    isJogando: isJogandoJogador3,
    img: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/t/thi/large/18079.png"

}


const mediaAltura = (alturaJogador1+alturaJogador2+alturaJogador3)/3;
const todosJogam = isJogandoJogador1 && isJogandoJogador2 && isJogandoJogador3;



const jogadores = [];

if(objetoJogador1.isJogando){
    jogadores.push(objetoJogador1);
}else{
    alert("Jogador não adicionado pois não está jogando")
}

if(objetoJogador2.isJogando){
    jogadores.push(objetoJogador2);
}else{
    alert("Jogador não adicionado pois não está jogando")
};

if(objetoJogador3.isJogando){
    jogadores.push(objetoJogador3);
}else{
    alert("Jogador não adicionado pois não está jogando")
};

function relataJogador(jogador){

    let paises = jogador.nacionalidades.join();
    console.log(`Nome: ${jogador.nome.toUpperCase()}\n`);
    console.log(`Idade: ${jogador.idade}\n`);
    console.log(`Altura: ${jogador.altura}cm\n`);
    console.log(`Nacionalidades: ${paises}\n`);
    console.log("\n");

}

console.log("Relatório Jogadores:\n");
console.log("Média de altura: "+mediaAltura);
console.log("Todos jogam?", todosJogam);

for (let i =0; i< jogadores.length; i++){

relataJogador(jogadores[i]);
};

const nomeEIdadeJogadores = jogadores.map((jogador) => {return {nome: jogador.nome, idade: jogador.idade}});

console.log(nomeEIdadeJogadores);

const jogadoresBaixinhos = jogadores.filter(jogador=> (jogador.altura < mediaAltura));
console.log(jogadoresBaixinhos);


function encontraJogadorPorNome(array, nome){

    const jogadores = array.filter((jogador)=> jogador.nome === nome);
    console.log(jogadores);
    console.log(jogadores.length);
    if(jogadores.length>=1){
        return jogadores;
    }else{
        return array;
    }

}

function buscaJogador(){
    const termo = document.querySelector(".search-bar").value;
    if(!termo){
        alert("Digite alguma coisa para que a busca aconteça");
    }else {
       const jogadoresFiltrados = encontraJogadorPorNome(jogadores, termo);
       console.log(jogadoresFiltrados);
       criaJogadores(jogadoresFiltrados);
    }
}

jogadores.push({
    nome: "Federico Chiesa",
    idade: 24,
    altura: 178,
    isJogando: true,
    img: "https://sortitoutsi.net/uploads/face/43161651.png"
});

function criaJogadores(array){

    document.querySelector('.card-container').innerHTML = "";

    array.forEach(element => {
        console.log(element.nome)
            document.querySelector('.card-container').innerHTML+=
            `<section class="player-card">
            <div class="player-image">
            <img src="${element.img}"/>
            </div>
            <div class="player-data">
            <p class="player-name">${element.nome}</p>
            <p>Idade: ${element.idade} anos</p>
            <p>Altura: ${element.altura}cm</p>
            </div>
            </section>`
    
        });

}

criaJogadores(jogadores);


