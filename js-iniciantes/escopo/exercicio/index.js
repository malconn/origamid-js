// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}

// console.log(var, marca, portas);

//const e let foram definidos dentro do escopo de bloco, portanto não consigo acessar aqui fora, já a palavra var é reservada, não podendo executar no console.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
// var numero = 50;

for(let numero = 0; numero <= 50; numero++) {
  const total = 10 * numero;
  console.log(total);
}

// console.log(total);
