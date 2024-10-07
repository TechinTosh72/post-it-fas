function lerNota() {
    var entrada = document.getElementById("inputNota").value;
    return entrada
}

function criarNota() {
    const notaContainer = document.getElementsByClassName(notaContainer);

    const titulo = document.createElement("h1");
    const texto = document.createElement("p");
    
    notaContainer.appendChild(titulo);
    notaContainer.appendChild(texto);
}
