// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item,index,array)=>{
//   console.log(item.toUpperCase(),index,array);
// })

// const li = document.querySelectorAll('li');

// const retornoForEach = li.forEach(function(item) {
//   item.classList.add('ativa');
// });

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item,index,array)=>{
//   console.log(item,index,array);
//   return item.toUpperCase()
// })
// console.log(novaArray)

// const numeros = [2,4,5,6,78];
// const numerosX2 = numeros.map(n => n*2)

// console.log(numeros)
// console.log(numerosX2)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]
// const tempoAulas = aulas.map(aula => aula.min)

// function nomeAulas(aula) {
//   return aula?.nome ? aula.nome : 'tem não';
// }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log('Aulas',tempoAulas)

// const aulas = [10,25,30];

// const reduceAulas = aulas.reduce((acumulador,item)=>{
//   console.log(`
//   Acumulador => ${acumulador}
//   Item => ${item}
//   `)
//   return item + acumulador
// },0)

// console.log(`Total do reduce => ${reduceAulas}`)

// const numeros = [10,25,30,2,3,54,33,22];

// const maiorNumero = numeros.reduce((anterior,atual)=>{
//   return anterior > atual ? anterior : atual;
// },0)

// console.log(maiorNumero)

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});
// console.log(listaAulas);
const frutas = ["Banana", "Pêra", "Uva"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});

const every = frutas.every((fruta) => {
  return fruta;
});

console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((n) => {
  return n > 3;
});

console.log(maiorQue3);
