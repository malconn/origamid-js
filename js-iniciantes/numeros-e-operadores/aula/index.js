let idade = 2e1;
let total = 10 + 5 + 10;
let divisao = 200 / 5;
let modulo = 514654464 % 3;

let testeNaN = 'Isso é 100' / 2;

console.log(idade);
console.log(total);
console.log(divisao);
console.log(modulo);
console.log(isNaN(testeNaN));


let soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;

console.log(soma1);


let incremento = 1;

console.log(--incremento);


// Para transformar algo em número ou tentar fazer a transformação, é só colocar o - ou + antes da variável ou antes de começar a string
// EX:
let idadeTransformNumber = '18';
let somaIdade5Anos = 5;

console.log(`${'essa é a sua idade atual:'} ${idadeTransformNumber}`);
console.log(`${'essa será sua idade daqui'} ${somaIdade5Anos} ${'anos:'} ${+idadeTransformNumber + somaIdade5Anos}`);