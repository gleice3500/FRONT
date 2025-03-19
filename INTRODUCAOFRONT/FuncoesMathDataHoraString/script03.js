//metados Avancçados de arrays 
let numeros = [10,20,30,40,50];

//map - percorrer o array e realiza operaçães
let numerosDobro = numeros.map(x=>x*2);
console.log(numerosDobro);

//filter - percorrer e filtrar
let numerosFiltro = numeros.filter(x=> x>25);
console.log(numerosFiltro);

//combinar filter com map
let numerosFiltroDobro = numeros.filter(x=>x<35).map(x=>x/10);
console.log(numerosFiltro);

//reduce -> array -> simples 
//soma dos valores de um arry
let soma =numeros.reduce((X,y)=> (x+y));
console.log(soma);