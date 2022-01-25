// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const titulos = document.querySelectorAll(".curso h1");
const descricao = document.querySelectorAll(".curso p");
const aulas = document.querySelectorAll(".curso span.aulas")
const horas = document.querySelectorAll(".curso span.horas");
let cursos = [
  {
    title: titulos,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  },
];
const Aulas = cursos.reduce((acumulador, atual, index) => {
  
  return acumulador;
}, {});
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixoTem = instrumentos.includes("Baixo");
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
const precos = compras.map((items) => {
  return items.preco.slice(2).trim().replace(`,`, `.`);
});

const valorCompras = precos.reduce((acumulador, atual) => {
  const total = (+acumulador) + (+atual);
  const priceTotal = total.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
  return priceTotal;
}, 0);
