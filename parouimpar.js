const numeroJs = document.getElementById("numero");
const mensagemJs = document.getElementById("mensagem");
const mostrarResultadoJs = document.getElementById("mostrarResultado");

function MostrarResultado(){

// Declarar e inicializar a variável numero
var numeroInteiro = 0;

// Declarar e inicializar a variável mensagem
var mensagemClc = "";

// Declarar e inicializar a variável resto
var resto = 0;

const partes = numeroJs.value.split(/[.e,]/)
if(((partes[1]) && (partes[1] != "")) || (isNaN(numeroJs.value))) {
    mensagemClc = "O Denise, sai da Live Filha";
}
else{
    
    numeroInteiro = numeroJs.value;

    // Dividir o numero por e e obter o resto
    resto = numeroInteiro % 2;

    // gerar a mensagem com base no conteudo do resto
    if(resto == 0)
    {
        mensagemClc = "O número informado é PAR"
    }
    else
    {
        mensagemClc = "O número informado é IMPAR"
    }
    
}
    mensagemJs.innerText = mensagemClc
}

function FiltrarEntrada(){
    var keycode = event.wich || event.keycode;
    if(keycode === 69 || keycode === 101)
    {
        event.preventDefault();
    }
    else{

    }

}

function HeadlePaste(){
    var clipboardData = event.clipboardData || window.clipboardData;
    var PasteData = clipboardData.getData('text').toUpperCase();
    if (PasteData.indexOff('E') > -1 )
    {
        event.stopPropagation();
        Event.preventDefault();
    }

}

mostrarResultadoJs.addEventListener("click", MostrarResultado)