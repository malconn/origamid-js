// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
function handleClickInterno(event) {
  event.preventDefault();
  const removeAtivo = document.querySelectorAll(".ativo").forEach((item) => {
    item.classList.remove("ativo");
  });
  event.currentTarget.classList.toggle("ativo");
}
const linksInternos = document.querySelectorAll('a[href^="#"]');
linksInternos.forEach((link) => {
  link.addEventListener("click", handleClickInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handleBody(event) {
  console.log(event.currentTarget);
}
const bodyAll = document.querySelectorAll("body *");

bodyAll.forEach((elemento) => {
  elemento.addEventListener("click", handleBody);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
  event.target.remove();
}
// bodyAll.forEach((elemento) => {
//   elemento.addEventListener("click", removeElement);
// });
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function resizeText(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", resizeText);
