console.log(Number.isNaN("ds"));
console.log(Number.isInteger(10));
console.log(parseFloat("100.27 reais"));
console.log(parseInt("100.27 reais", 10));

const preco = 10.15216516;

console.log(+preco.toFixed());

let preco2 = 10.49;

preco2 = preco2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(Math.PI);

const maxNumber = 52;
const minNumber = 22;
const aleatorio =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(aleatorio);
