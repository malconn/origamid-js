function Pessoa(nome,idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function (){
    return this.nome +  ' Abraçou a ideia de ter ' + this.idade + ' Anos'
  }
}

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
  return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('André', 28);

// console.log(Pessoa.prototype);
// console.log(andre.andar())
// console.log(andre.nadar())

const pais = 'Brasil'

const cidade  = new String('Rio')

const lista = document.querySelectorAll('li')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)


const Carro = {
  marca : 'Ford',
  preco : 2000,
  andar : () =>{
    return true;
  }
}