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
let DOM = {
  html: function (html) {
    document.querySelector(html);
  },
  classe: function () {
    return this.html.classList.add(classe);
  },
  conteudo: function () {
    return this.conteudo.innerText;
  },
};
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
let conteudoH1 = DOM.conteudo;

const newH1 = conteudoH1.bind(DOM, "h1", "titulo");

newH1("teste");

console.log(newH1);
