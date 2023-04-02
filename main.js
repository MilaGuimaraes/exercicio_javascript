const form = document.getElementById('formula-exercicio');

var campoA = parseInt(document.getElementById("campo-a").value);
var campoB = parseInt(document.getElementById("campo-b").value);



document.addEventListener("DOMContentLoaded", function(){
    var campoA = document.getElementById('campo-a').value;
    var campoB = document.getElementById('campo-b').value;

    document.getElementById("btn-verificar").addEventListener("click", function(){
        if(campoB.value > campoA.value) {
            alert("Válido");
        } else {
            alert("Inválido");
        }
    });
});   









    