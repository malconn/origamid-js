// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
  nome: "Malcon",
  sobrenome: "Augusto",
  idade: 19,
  cargo: "Dev FrontEnd Jr.",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome}${this.sobrenome}`;
};

console.log(dadosPessoais.nomeCompleto);
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "Homem" || pessoa === "homem") {
      return "late";
    }
    return "Não late";
  },
};
