// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(value){
    if(value){
      return 'true';
    }
}
console.log(verificaTruthy(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function areaQuadrado(lado){
    return lado * lado ;
}

console.log(areaQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  const nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}
console.log(nomeCompleto('Malcon','Augusto'));
// Crie uma função que verifica se um número é par
function verifyIfPar(numero){
  if(numero % 2 === 0){
    console.log('é par');
  }else{
    console.log('é impar');
  }
}
verifyIfPar(2);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verifyTypeOf(dado){
  return typeof dado
}

console.log(verifyTypeOf(1));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
window.addEventListener('scroll',()=>{
  console.log(nomeCompleto('Malcon', 'Augusto'));
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  