const imgs = document.querySelectorAll('.drag-img'); // seleciona todos os elementos com a class: 'drag-img'
const dropzones = document.querySelectorAll('.dropzone'); // seleciona todos os elementos com a class: 'dropzone'

const gvts = document.querySelectorAll('.gvt-fogueira');

gvts.forEach( gvt => {
    let elementoFilho = document.getElementById("gravetosId").children; //selecionando o elemento com a classe ""
    let totalFilhos = elementoFilho.length; // contando quanto elementos ele possue dentro dele
    if(totalFilhos == 4){
        gvt.fogueira(document.getElementById('gvt1'));
    }
})

/** Função para os gravetos aparecerem */
function fogueira(e){
    e.style.display = "flex";
}

/** Adicionando as funções em imgs */
imgs.forEach(img => {
    img.addEventListener('dragstart', dragStart) // Acionado quando o usuário começa a arrastar um elemento
    img.addEventListener('drag', drag) // Acionado quando um elemento está sendo arrastado
    img.addEventListener('dragend', dragEnd) // Acionado quando uma operação de arrastar está terminando
})

/** Funções */
function dragStart(){    
    this.classList.add('is-dragging') // this = card
}

function drag(){
    var inst = document.querySelector('#instrucao')
    inst.style.display = "none";
}

function dragEnd(){
    this.classList.remove('is-dragging') // this = card
}

/** Adicionando as funções em dropzones */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragEnter) // Acionado quando um elemento entra em um ponto de soltura (dropzone)
    dropzone.addEventListener('dragover', dragOver) // Acionado quando um elemento está sendo arrastado sobre o dropzone
    dropzone.addEventListener('dragleave', dragLeave) // Acionado quando um elemento abandona o dropzone
    dropzone.addEventListener('drop', drop) // Acionado quando um elemento é solto no dropzone
})

/** Funções */
function dragEnter(){
    const imgDrag = document.querySelector('.is-dragging')
    imgDrag.classList.add('display-none')
}

function dragOver(){
    this.classList.add('start') //adiciona a classe 'start'  e this = dropzone

    // seleciona a img drag
    const imgDrag = document.querySelector('.is-dragging')

    this.appendChild(imgDrag) // this = dropzone

    /** Para os mudar as imagens dos gravetos */
    var elementoFilho = document.getElementById("gravetosId").children; //selecionando o elemento com a classe ""
    var totalFilhos = elementoFilho.length; // contando quanto elementos ele possue dentro dele

    var gvt1 = document.querySelector('#gvt1')
    var gvt2 = document.querySelector('#gvt2')
    var gvt3 = document.querySelector('#gvt3')
    var gvt4 = document.querySelector('#gvt4')
    var gvt5 = document.querySelector('#gvt5')

    if(totalFilhos >= 4){
        gvt1.style.display = 'flex'
    } else if(totalFilhos === 3){
        gvt1.style.display = 'none'
        gvt2.style.display = 'flex'        
    } else if(totalFilhos === 2){
        gvt2.style.display = 'none'
        gvt3.style.display = 'flex'
    } else if(totalFilhos === 1){
        gvt3.style.display = 'none'
        gvt4.style.display = 'flex'
    } else if(totalFilhos <= 0){
        gvt4.style.display = 'none'
        gvt5.style.display = 'flex'

        if(gvt5.style.display = 'flex'){
            var fim = document.querySelector('#fim')
            fim.style.display = "block";
    }
        
    }
    
}

function dragLeave(){
    this.classList.remove('start') // remove a classe 'start' e this = dropzone
}

function drop(){
    
}

/** Função para saber quantos "filhos" (elementos) uma classe possue */
function filhos() {
    let elementoFilho = document.getElementById("gravetosId").children; //selecionando o elemento com a classe ""
    let totalFilhos = elementoFilho.length; // contando quanto elementos ele possue dentro dele

    if(totalFilhos <= 0){ // se o total de elemento for < ou = a 0
        // Seleciona os elementos por id e deixa seu display none
        var gvt5 = document.querySelector('#gvt5')
        gvt5.style.display = 'none'

        var fogueira = document.querySelector('#fire')
        fogueira.style.display = 'flex'
    }
      
}
