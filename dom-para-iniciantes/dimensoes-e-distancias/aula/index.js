const listaAnimais = document.querySelector(".animais-lista");

const heigthLista = listaAnimais.scrollHeight;

const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");

const leftH2 = primeiroh2.offsetLeft;

console.log(leftH2);

const rect = primeiroh2.getBoundingClientRect();

console.log(rect);
if (rect.top < 0) {
  console.log("passou do elemento");
}
console.log(
  window.innerWidth,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia("(max-width:600px)");

if (small.matches) {
  console.log("usuário mobile");
}
console.log(small);
