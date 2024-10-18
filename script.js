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

    const topo = document.createElement("div");
    topo.className = "topoClass";

    const texto = document.createElement("textarea");
    texto.value = lerNota(); 
    texto.style.cursor = "move";
    postIt.style.backgroundColor = corPostIt();
    texto.style.backgroundColor = corPostIt();
    
    const botaoMinimizar = document.createElement("button");
    botaoMinimizar.className = "botaoMinimizarClass";
    const textoMinimizar = document.createTextNode("-");
    botaoMinimizar.addEventListener("click", function() {
        minimizar(botaoMinimizar);
    });

    
    const botaoFechar = document.createElement("button");
    botaoFechar.className = "botaoFecharClass";
    const textoFechar = document.createTextNode("X");
    
    const datahor = document.createElement("p")
    datahor.id = "idDatahor"+numId;
    datahor.innerHTML = data();

    topo.appendChild(datahor);
    botaoMinimizar.appendChild(textoMinimizar);
    botaoFechar.appendChild(textoFechar);
    topo.appendChild(botaoFechar);
    topo.appendChild(botaoMinimizar);
    postIt.appendChild(topo);
    postIt.appendChild(texto);
    notaContainer.appendChild(postIt);

    numCor += 1;
    new Draggable(postIt);
    
}


function removerNota() {

    var elemento = document.getElementById('')
    elemento.removeAttribute('') 

}

var textoAnterior;
function contar(){
    var texto =  document.getElementById('inputNota');
    var palavras = texto.value.trim().split(/\s+/).filter(Boolean);
    var numpala = document.getElementById('numpala');
    numpala.innerHTML = palavras.length;
 
    if (palavras.length > 10) {
        alert('máximo 10 palavras')
        document.getElementById('inputNota').value= textoAnterior;
        numpala.innerHTML = '10';
    }
    else{
        textoAnterior = texto.value;
    }
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
        isso.mousemoveI(event);
    }

    this.elemento.addEventListener("mousedown", function (event) {
        isso.onMouseDown(event);
    });

    elemento.draggableInstance = this;
}

Draggable.prototype.mousemoveI = function(event) {
    var diffX = event.x - this.posX;
    var diffY = event.y - this.posY;
    this.elemento.style.top = (this.top + diffY) + "px";
    this.elemento.style.left = (this.left + diffX) + "px";
}

Draggable.prototype.onMouseDown = function(event) {
    if (!this.elemento.classList.contains("minimizado")) {
        this.posX = event.x;
        this.posY = event.y;
        this.elemento.classList.add("dragging");
        window.addEventListener("mousemove", this.refMouseMove);
        window.addEventListener("mouseup", this.refMouseUp);
    }
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

function data() {
    var dataIn = new Date();
    var dia = dataIn.getDate();
    var mes = dataIn.getMonth()+1;
    var ano = dataIn.getFullYear();
    var hora = dataIn.getHours();
    var minuto = dataIn.getMinutes();
    var segundo = dataIn.getSeconds();
    var dataOut = (dia+"/"+mes+"/"+ano+" "+hora+":"+minuto+":"+segundo);
    return dataOut
}

function minimizar(botao) {
    let top = botao.parentElement;
    let post = top.parentElement;

    post.style.position = "relative";
    post.style.top = "0px";
    post.style.left = "0px";

    post.classList.add("minimizado");

    let container = document.getElementById("notaContainerId");
    container.removeChild(post);

    let stand = document.getElementById("standBy");
    stand.appendChild(post);

    let botaoRestaurar = document.createElement("button");
    botaoRestaurar.className = "botaoRestaurar"
    botaoRestaurar.innerHTML = "Restaurar";
    botaoRestaurar.onclick = function() {
        post.classList.remove("minimizado");
        stand.removeChild(post);
        container.appendChild(post);
        post.removeChild(botaoRestaurar);
    };

    post.appendChild(botaoRestaurar);
}

