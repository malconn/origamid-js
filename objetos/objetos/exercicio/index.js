// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado (dado){
  return Object.prototype.toString.call(dado);
}
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const prototypeString = verificarDado(String).__proto__
const prototypeArray = verificarDado(Array).__proto__