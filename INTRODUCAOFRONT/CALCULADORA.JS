//criar uma calculadora Simples em JS
//inportr da biblioteca 
const prompt =  require("prompt-sync") ();

//funções - Operações 
//soma 
function soma (a,b) {
    reatrun (a+b);
}
//subtração 
function sub( a,b){
    reatrun (a-b);
}
//multiplicação
function multi (a,b) {
    return(a*b);
}
//divisão
function div (a,b){
    return (a/b)
}

//menu de Operaçõaes
function menuOperacoes(){
    
    console.log("===Calculadora Simples===");
    console.log("1, soma");
    console.log("2, subtração");
    console.log("3, multiplicação");
    console.log("4, Divisão");
    console.log("================");
    led operacao = pronpt ("Escolha a Operação Desejada: " );
    //entrada dos nºs
    led numero1 =  Number (prompt("digite nº1: "));
    led numero2=  Number (prompt("digite nº2: "));
    led resultado; 
    //condicional 
    switch (operacao){
        case "1"
        resultado = soma (numero1,numero2);
            break;
            case"2";
            resultado = sub(numero1,numero2);
            break
             case"3";
            resultado = multi(numero1,numero2);
            break
            case"4";
            if(numero2==0){
                console.log("Não Dividirás por zero!!!");
                resultado = mull
            }else{ 
            resltado= div (numero1,numero2);
            }
            break
            default:
                console.log ("opração Invalida");
                break;
                default:
                  console.log("Operação Inválida")
            break;
    }//fim swith
    console.log ("Resultado: +resultado"
}

// execução do programa

var continuar = true;
while (continuar){
    menuOperacoes();
    let sair = prompt("1. Continuar | 2. Sair | ")
    if (sair == "2"){
        continuar = false;
        console.log("Saindo...")
    }



}