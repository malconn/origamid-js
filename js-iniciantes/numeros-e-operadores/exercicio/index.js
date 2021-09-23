// Qual o resultado da seguinte expressão?

var total = 10 + 5 * 2 / 2 + 20;
// 35
console.log(total);

// Crie duas expressões que retornem NaN

let viraNanNumber = '45w';
let somaNan = +viraNanNumber + 5;
console.log(somaNan);

// Somar a string '200' com o número 50 e retornar 250

let somaStr = +'200' + 50;
console.log(somaStr);

// Incremente o número 5 e retorne o seu valor incrementado

let incremento5 = 5;
console.log(++incremento5);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg' // NaN (Not a Number)

console.log(peso)
