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


const moto = {
  capacete : true,
}

// Object.assign(moto,funcaoAutomovel,carro)//aqui ele vai pegar um objeto já criado e colocar para ele infos de outros objetos criados, como se fosse herdar de uma função construtora

Object.defineProperties(moto,{
  rodas: {
    get(){
      return  this._rodas;
    },
    set(valor){
      this._rodas = valor * 4 + ' Total rodas'
    }
  }
})

delete moto.capacete