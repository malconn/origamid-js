// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
function handleClickInterno(event) {
  event.preventDefault();
  const removeAtivo = document.querySelectorAll(".ativo").forEach((item) => {
    item.classList.remove("ativo");
  });
  event.target.classList.toggle("ativo");
}
const linksInternos = document.querySelectorAll('a[href^="#"]');
linksInternos.forEach((link) => {
  link.addEventListener("click", handleClickInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handleBody(event) {
  console.log(event.target);
}
const bodyAll = document.body;
bodyAll.addEventListener("click", handleBody);
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement(event) {
  event.target.remove();
}
// bodyAll.addEventListener("click", removeElement);
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function resizeText(event) {
  if (event.key === "t") {
    document.body.style.fontSize = "4rem";
  }
}
bodyAll.addEventListener("keydown", resizeText);
