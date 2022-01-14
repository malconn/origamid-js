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

const frase2 = "Ta";

frase2.repeat(5);

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// listaItens = listaItens.replace(/[ ]+/g, ", ");

const arrayLista = listaItens.split(" ");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);

const frutasArray = ["Banana", "Melancia", "Laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toLowerCase() === "feminino");
