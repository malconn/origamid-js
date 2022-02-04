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
const Dom = {
  elementTag: document.querySelector(this.elementTag),
  classe: function (classe) {
    return this.elementTag.classList.add(classe);
  },
  conteudo: function (conteudo) {
    return (this.elementTag.innerText = conteudo);
  },
};
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Conteudo = {
  texto: "OLÁ",
  conteudo: function () {
    return this.texto;
  },
};

const h1NovoConteudo = h1Conteudo.conteudo;

const h1Completo = h1NovoConteudo.bind(Dom, "h1", "titulo");
