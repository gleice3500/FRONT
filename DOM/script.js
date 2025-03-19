// introdção ao Estudo de DOM

//Selecionar e Modificar Elementos

//getElementById ->variavel simples 
let titulo = document.getElementById("titulo");
console.log(titulo);
 titulo.innerText = "Outro Titulo";//modificar o texto
 
 //getElementsByClassNome ->Vetor(array)
 let descricao =  document.getElementsByClassName("descricao");
 console.log(descricao[0]);
 descricao[1].innertext ="Outro texto"
 descricao[0].computedStyleMap.colar = "red"

 //getElementsByclassName -> vetor (array)
 let p = document.getElementById("p");
 console.log(p[1]);
 p[1].style.fontWeigth = "bold"
 
 //queryselector -> variavel simples
 let paragrafo  = document.querySelector("p");
 console.log(paragrafo);
 paragrafo.style.fontSize = "40px";

 //querySelectorAll -> vetor(array)
 let descricaoAll = document.querySelectorAll(".descricao");
 descricaoAll.forEach(Element=> element.style.color="green");

 //lançamento de Eventos (Eventlistener)

 //1 - chmando direto no botão

 function mudarCorFundo(){
    let boby = document.querySelector("boby");
    boby.style.backgroundColar = "blue";
 }


 //2 - adicionamdo o ouvinte(addEven)