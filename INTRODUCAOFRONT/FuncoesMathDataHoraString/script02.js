//funçoes de texto (string)

let texto = "aula de JavaScript";

//contar os caracteres (length)
console.log(texto.length);//18

//MAIÚSCULAS  E minúsculas 
console.log(texto.toUpperCase()); // MAIÚSCULA 
console.log(texto.toLowerCase)(); // minúscula

//partes  do texto 
// subString
console.log(texto.substring(0,4));//aula 
//slice(quantidade)
console.log(texto.slice(10-));//javacript

//Subtituir parte do texto 
console.log(texto.replace("java", "type"))

//tesouro (trim)
let texto1 = "javaScript";
console.log(texto1); //" javaScript "
console.log(texto1.trim());

//separar texto (split)- caracter comum 
let linguagens = "javscript python, PHP, java, C#";
let vetorlinguagens = linguagens.split("")
console.log (linguagens);
console.log (vitorlinguagens);

let caracteres ="Bom Dia Com Alegria";
let caracteresSemEspaco=caracteres.replaceAll(" ","");
console.log(caracteres);
console.log(caracteres.length);
console.log(caracteresSemEspaco);
console.log(caracteresSemEspaco.length);
