function lerNota() {
    var entrada = document.getElementById("inputNota").value;
    return entrada;
}

function criarNota() {
    const notaContainer = document.getElementById("notaContainerId");

    const postIt = document.createElement("div");
    postIt.className = "postItClass";
    const texto = document.createElement("textarea");
    texto.placeholder = lerNota();

    postIt.appendChild(texto);
    notaContainer.appendChild(postIt);
}
