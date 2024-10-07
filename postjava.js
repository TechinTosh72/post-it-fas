function criar(){
    var input = document.getElementById('txtnome');
    var replique = document.getElementById('repliquenome');
    alert('oi ' + input.value);
    replique.innerHTML = input.value;
}
