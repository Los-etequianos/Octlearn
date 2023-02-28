let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavraSecretaTraducao;

let listaDinamica = [];

let tentativas = 6;

const palavras = [
    palavra01 = {
        nome: "COOK",
        categoria: "VERBS",
        traducao: "COZINHAR"
    },
    palavra02 = {
        nome: "DRINK",
        categoria: "VERBS",
        traducao: "BEBER"
    },
    palavra03={
        nome: "BELIEVE",
        categoria: "VERBS",
        traducao: "ACREDITAR"
    },
    palavra04={
        nome: "CREATE",
        categoria: "VERBS",
        traducao: "CRIAR"
    },
    palavra05={
        nome: "USE",
        categoria: "VERBS",
        traducao: "USAR"
    },
    palavra06={
        nome: "BECOME",
        categoria: "IRREGULAR VERBS",
        traducao: "TORNA-SE"
    },
    palavra07={
        nome: "MEAN",
        categoria: "IRREGULAR VERBS",
        traducao: "SIGNIFICAR"
    },
    palavra08={
        nome: "HIDE",
        categoria: "IRREGULAR VERBS",
        traducao: "ESCONDER-SE"
    },
    palavra09 = {
        nome:"CREEP",
        categoria:"IRREGULAR VERBS",
        traducao:"ENGATINHAR"
    },
    palavra10 = {
        nome:"LEAD",
        categoria:"IRREGULAR VERBS",
        traducao:"CONDUZIR"
    },
    palavra11 = {
        nome:"HORSE",
        categoria:"ANIMAL",
        traducao:"CAVALO"
    },
    palavra12={
        nome: "SHEEP",
        categoria: "ANIMAL",
        traducao: "OVELHA"
    },
    palavra13={
        nome: "MONKEY",
        categoria: "ANIMAL",
        traducao: "MACACO"
    },
    palavra14={
        nome: "ALLIGATOR",
        categoria: "ANIMAL",
        traducao: "JACARÉ"
    },
    palavra15={
        nome: "FISH",
        categoria: "ANIMAL",
        traducao: "PEIXE"
    }
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraSecretaTraducao = palavras[indexPalavra].traducao;

    console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById('tecla-' + letra).disabled = true;
    if(tentativas > 0 ){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#ff1964";
    document.getElementById(tecla).style.color="white";
}

function comparaListas(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra);
    /** Se a letra não existir na palavra */
    if(posicao < 0){
        tentativas--;
        carregaImagemForca();
    } else {
        /** Coloca a letra no lugar certo na lista dinamica */
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }  
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }  
    }

    if(vitoria == true){
        alert("Parabéns você venceu!!\nClique no 🎮 para jogar novamente")
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = 'url("./img/forca01.png")';
            break
        case 4:
            document.getElementById('imagem').style.background = 'url("./img/forca02.png")';
            break
        case 3:
            document.getElementById('imagem').style.background = 'url("./img/forca03.png")';
            break
        case 2:
            document.getElementById('imagem').style.background = 'url("./img/forca04.png")';
            break
        case 1:
            document.getElementById('imagem').style.background = 'url("./img/forca05.png")';
            break
        case 0:
            document.getElementById('imagem').style.background = 'url("./img/forca06.png")';
            alert("Que pena você perdeu :(\nClique no 🎮 para jogar novamente");
            break
        default:
            document.getElementById('imagem').style.background = 'url("./img/forca.png")';
            break
    }
}

function reiniciarPagina(){
    location.reload();
}