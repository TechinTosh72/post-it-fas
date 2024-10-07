function texto(){
    var input = document.getElementById('txtnome');
    var replique = document.getElementById('repliquenome');
    replique.innerHTML = input.value;
}

function contar(){
    var texto =  document.getElementById('txtnome');
    var palavras = texto.value.split(" ");
    var numpala = document.getElementById('numpala');
    console.log(palavras.length);
    numpala.innerHTML = palavras.length;
    

}
