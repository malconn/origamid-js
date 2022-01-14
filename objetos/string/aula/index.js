// const comida = "Pizza";

// const agua = new String("Agua ");

// console.log(agua.length);

const frase = "A melhor linguagem é";

const linguagem = " Javascript";

console.log(frase.charAt(frase.length));

const fraseFinal = frase.concat(linguagem);

const fruta = "Banana";

const listaFrutas = "Melancia, Banana,Laranja";

console.log(fruta.startsWith("Ba"));

const preco = "R$99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 1200"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(15, "="));
});
