// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
  // faces: {
  //   value: 5,
  // }, poderia sair criando essas propriedade e que não poderiam ser modificadas posteriormente
});
// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const prototypeString = Object.getOwnPropertyNames(String.prototype);
const prototypeArray = Object.getOwnPropertyNames(Array.prototype);
