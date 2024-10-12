function lerNota() {
    var entrada = document.getElementById("inputNota").value;
    return entrada;
}

function criarNota(event) {
    event.preventDefault();
    const notaContainer = document.getElementById("notaContainerId");

    const postIt = document.createElement("div");
    postIt.className = "postItClass";
    postIt.style.cursor = "move";

    const texto = document.createElement("textarea");
    texto.value = lerNota(); 
    texto.style.backgroundColor = "rgb(" + corAleatoria() + ")";

    postIt.appendChild(texto);
    notaContainer.appendChild(postIt);

    new Draggable(postIt);
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


function corAleatoria() {
    min = Math.ceil(1);
    max = Math.floor(256);
    r = (Math.floor(Math.random() * (max - min) + min));
    g = (Math.floor(Math.random() * (max - min) + min));
    b = (Math.floor(Math.random() * (max - min) + min));

    return r+", "+g+", "+b;
  }
