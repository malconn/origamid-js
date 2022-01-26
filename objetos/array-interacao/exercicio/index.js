// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCurso = Array.from(cursos);

const objetosCurso = arrayCurso.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector("span.aulas").innerText;
  const horas = curso.querySelector("span.horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorq100 = numeros.filter((numero) => numero > 100);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixoTem = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});
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

let valorCompras = compras.reduce((acumulador, atual) => {
  const precoLimpo = +atual.preco.slice(3).replace(",", ".");
  const total = acumulador + precoLimpo;
  return total;
}, 0);

valorCompras = valorCompras.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
