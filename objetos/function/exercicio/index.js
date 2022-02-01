// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll("p");
const lengthParagraphs = Array.from(paragraphs).reduce((acumulador, atual) => {
  const length = acumulador + atual.innerText.length;
  return length;
}, 0);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Dom(seletor) {
  this.element = document.querySelector(seletor);
  this.classe = function (classe) {
    this.element.classList.add(classe);
  };
  this.conteudo = function (conteudo) {
    this.element.innerText = conteudo;
  };
}
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Novo = Dom.bind("h1", "titulo");
