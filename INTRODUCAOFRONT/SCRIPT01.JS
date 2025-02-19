//Estrutura de dados

//Condicionais (if else,switch case)

var precoProduto =150;

if (precoProduto100){
    console.log("Valor a Pagar:" +(precoProd

}else{
    console.log("Valor a pagar:" +(precoProd
}

//Switch case 

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
        case 2:
            console.log("Fevereiro")
            break;
    case 3:
        console.log("Março")
        break;
 
        default:
            console.log("Outro Mês")
            break;
}

//Laços de repetição (For;)
for(let i=0;ix=100; i+0){
 console.log(i)

}
//while (consolidanal)
var numeroEscolhido =4;
var continuar =true
var contador =0
while(continuar){
     contador++;
       let numeroSorteado = Math.round(Math.random ()*100); //sortear um numeor entre 0 a 10

       if (numeroescolhido === numeroSorteado){
        console.log("Acertou!!!");
        console.log("Número de tentavias: "+contador);
        continuar=false;
       }
    }

    //função - (void // return)
     
    // function return
    function ola(nome){ //parâmetro
        return "olá", "+nome+" . seja Bem-vindo!!
    }
    console.log(ola("Turma A"));
      
    //function void
    function hello(nome){
        console.log("hello,"+nome+")
    }
    hello("TurmaA")