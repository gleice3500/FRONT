// sintução de aprendizagem 01- array e Matrix
// calculadora de media 
const prompt = require("prompt-sync")
var notas = []; // declaração de um vetor 

// função para adicionar nota ->media 
function AdicionarNota(){
    let nota = Number(prompt("Informe a Nota:"));
    notas.push(nota);
    console.log(" nota Adicionar com Sucesso")
}
//Função para cacular média 
function cacularNotas(){
    if(notas.length ===0) return;
    let=soma =media.reduce((x,y)=>x+y);
    let medifinal = soma/notas.length;
    console.log("A média é" +mediafinal)
}
//menu de opções
function menuOpcoes(){
    console.lo("===Calculadora Média===");
    console.log("|1.Adicionar Nota  |");
    console.log("|2Calcular Média   |");
    console.log("3. sair            |");
    console.log("=====================");
    let operacaco = prompt("informe a opção Desejada")
    switch(operacao) {
        case "1":AdicionarNota();break;
        case "2":calcularMedia();break;
        case "3":continua = false;break;
        default: console.log("opção Invalida");break;
    }//fila do switch
    }//fim do whille
    console.log("saindo...");
