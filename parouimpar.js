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

const partes = numeroJs.value.split(/[.,]./)
if(partes[1])

// coletar o valor digitado no numero
//numero = numeroJs.

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

    mensagemJs.innerText = mensagemClc
}

mostrarResultadoJs.addEventListener("click", MostrarResultado)