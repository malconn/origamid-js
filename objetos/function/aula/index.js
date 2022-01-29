// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }

// function darOi(name) {
//   console.log("Oi para vc" + " " + name);
// }

// darOi.call(null, "Malcon");

// function descricaoCarro(velocidade) {
//   console.log(this.marca + " " + this.ano + " " + velocidade + "km");
// }
// descricaoCarro.call({ marca: "Ford", ano: 2018 }, 1000);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pera"];

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }
// Dom.prototype.ativo = function (classe) {
//   console.log(this.element);
//   this.element.classList.add(classe);
// };

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativar");
// const ul = new Dom("ul");
// const li = {
//   element: document.querySelector("li"),
// };
// ul.ativo.call(li, "ativo");

const frutas = ["Banana", "Uva", "Pera"];
Array.prototype.pop.call(frutas);

const li = document.querySelectorAll("li");
const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);

const numeros = [22, 33, 434, 2243, 455];

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

// se a função é pura e não precisa referenciar a nenhum obj, ela deve receber null como primeiro argumento de call ou bind (call : pra ser usado apenas nesse único ex e bind pode ser replicado e chamado posteriormente na variável que ele está ex : acelerarHonda)
