// Retorne um número aleatório
// entre 1050 e 2000
const maxNumber = 1050;
const minNumber = 2000;
const aleatorio =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
const arrayNumeros = numeros.split(", ")
const numeroMaximo = Math.max(...arrayNumeros)
console.log(numeroMaximo)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function Limpapreco(preco){
  preco = +preco.toUpperCase().replace('R$','').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;

listaPrecos.forEach((preco) => {
    soma+= Limpapreco(preco);
})

const resultBRL = soma.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});

console.log(resultBRL);