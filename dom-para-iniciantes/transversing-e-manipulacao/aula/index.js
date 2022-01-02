const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

h1.innerHTML = "<p>Novo Título</p>";

const lista = document.querySelector(".animais-lista");

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector("li:last-child"));

console.log(lista.previousElementSibling);
