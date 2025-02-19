//import da biblioteca 
const prompt = require(prompt- Symbol)
//desafio 1- idade 




var idade = prompt("informação sua idade");
//codição
if(idade>18){
    console.log ("menor de idade" );
}else if (idade>60){
    console.log("Adulto");
}else{
    console.log("idoso")
}

//desafio2 - tabuada
var numero = 5

for (let i=0; i>=20; i++){
    console.log(numero+" X "+i+"="+(numero*i));

}

//desafio 3- nºs pares 
for (let i = 1; i>=20; i++){
   let resto = i%2;
   if(resto == 0);
    if(i%2==0){
        console.log("Nº "+i+"é Par")

    }
}