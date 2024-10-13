var numId = 0;
var numCor = 0;

function lerNota() {
    var entrada = document.getElementById("inputNota").value;
    return entrada;
}

function criarNota(event) {
    numId += 1;
    event.preventDefault();
    const notaContainer = document.getElementById("notaContainerId");

    const postIt = document.createElement("div");
    postIt.className = "postItClass";
    postIt.id = "postItId"+numId;
    postIt.style.cursor = "move";

    const texto = document.createElement("textarea");
    texto.value = lerNota(); 
    texto.style.cursor = "move"
    texto.style.backgroundColor = corPostIt();
    
    const botao = document.createElement("button");
    botao.style.backgroundColor = corPostIt();
    botao.innerHTML = "⎯";
    numCor += 1;

    postIt.appendChild(botao);
    postIt.appendChild(texto);
    notaContainer.appendChild(postIt);

    new Draggable(postIt);
}

function removerNota() {

    var elemento = document.getElementById('')
    elemento.removeAttribute('') 

}

function contar(){
    var texto =  document.getElementById('inputNota');
    var palavras = texto.value.trim().split(/\s+/).filter(Boolean);
    var numpala = document.getElementById('numpala');
    numpala.innerHTML = palavras.length;
}

var Draggable = function(elemento) {
    var isso = this; 
    this.elemento = elemento;
    this.posX = 0;
    this.posY = 0;
    this.top = 0;
    this.left = 0;

    this.refMouseUp = function (event) {
        isso.onMouseUp(event); 
    }
    
    this.refMouseMove = function (event) {
        isso.onMouseMove(event); 
    }
    
    this.elemento.addEventListener("mousedown", function (event) {
        isso.onMouseDown(event); 
    });
}

Draggable.prototype.onMouseDown = function(event) {
    this.posX = event.x;
    this.posY = event.y;
    this.elemento.classList.add("dragging");
    window.addEventListener("mousemove", this.refMouseMove);
    window.addEventListener("mouseup", this.refMouseUp);
}

Draggable.prototype.onMouseMove = function(event) {
    var diffX = event.x - this.posX;
    var diffY = event.y - this.posY;
    this.elemento.style.top = (this.top + diffY) + "px";
    this.elemento.style.left = (this.left + diffX) + "px";
}

Draggable.prototype.onMouseUp = function(event) {
    this.top = parseInt(this.elemento.style.top.replace(/\D/g, '')) || 0;
    this.left = parseInt(this.elemento.style.left.replace(/\D/g, '')) || 0;
    this.elemento.classList.remove("dragging");
    window.removeEventListener("mousemove", this.refMouseMove);
    window.removeEventListener("mouseup", this.refMouseUp);
}

var draggables = document.querySelectorAll(".postItClass");
[].forEach.call(draggables, function(draggable) {
    new Draggable(draggable);
});


function corPostIt() {
    var cor = [];
    let rosa = "#FC4D91";
    let laranja = "#E6682C";
    let amarelo = "#FEC721";
    let verde = "#CFED23";
    let azul = "#33AED9";
    let roxo = "#D782EC";
    cor.push(rosa, laranja, amarelo, verde, azul, roxo);
    if (numCor > 5) {
        numCor = 0 ;
    }

    return cor[numCor];
  }
