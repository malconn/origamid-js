// const pessoa = new Object({
//   nome:"Malcon",
// })

// console.log(pessoa)

// const carro = {
//   rodas: 4,
//   init(valor){
//     this.marca = valor;
//     return this
//   },
//   acelerar(){
//     return this.marca + 'Acelerou';
//   },
//   buzinar(){
//     return this.marca + 'buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda'); //então ele vai pegar o obj carro como referência para poder criar um novo com novos valores dependendo de suas funções

// const ferrari = Object.create(carro).init('Ferrari');

// console.log(honda)
// console.log(ferrari)

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   capacete: true,
// };

// Object.assign(moto,funcaoAutomovel,carro)//aqui ele vai pegar um objeto já criado e colocar para ele infos de outros objetos criados, como se fosse herdar de uma função construtora

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + " Total rodas";
//     },
//   },
// });

// console.log(Object.getOwnPropertyDescriptors(Array));

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//   window,
//   "innerHeight"
// );

// Object.getOwnPropertyNames(Array); //do construtor de array
// Object.getOwnPropertyNames(Array.prototype); //do array já depois de feito, ou seja, recebendo coisas do construtor

// const frutas = ["Banana"];

// console.log(Object.getPrototypeOf(frutas));
// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// const novaFruta = frutas1; //isso aqui muda os valores da array que eu estou recebendo, para que ele possa diferenciar, eu teria que de alguma forma clonar o array
// console.log(
//   Object.is(frutas1, frutas2)
//     ? "são iguais e um modifica o outro"
//     : "são diferentes"
// );

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// Object.seal(carro);

// carro.marca = "Honda";

const frutas = ['Banana','Uva'];
const frase = 'Oi frase';
const somar = (a,b)=>{
  return a + b
};

const carro = {
  marca: 'Ford'
}
// console.log(carro.toString());

console.log(Object.prototype.toString.call(somar))