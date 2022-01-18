// Retorne um número aleatório
// entre 1050 e 2000
const maxNumber = 1050;
const minNumber = 2000;
const aleatorio =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
let numeros = Math.max(4, 5, 20, 8, 9)
console.log(numeros)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function Limpapreco(){
  listaPrecos.forEach((item) => {
    let itemRemovers = +item.toLocaleUpperCase().replace('R$ ','').trim().replace(',','.')
    console.log(itemRemovers.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
  })
}

Limpapreco();