// Verifique a distância da primeira imagem
// em relação ao topo da página
const topo = document.querySelector("img");

const topImg = topo.getBoundingClientRect().top;

console.log(topImg);

// Retorne a soma da largura de todas as imagens
const todas = document.querySelectorAll("img");

todas.forEach((img) => {
  let widthImg = img.getBoundingClientRect().width;
  let heightImg = img.getBoundingClientRect().height;

  let widthMax = (widthImg += widthImg);
  let heightMax = (heightImg += heightImg);

  console.log(parseInt(widthMax + heightMax));
});
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const verifySize = document.querySelectorAll("a");

verifySize.forEach((item) => {
  const width = item.getBoundingClientRect().width;
  const height = item.getBoundingClientRect().height;

  console.log(item, width, height);
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");

if (window.matchMedia("(max-width:720px)").matches) {
  menu.classList.add("menu-mobile");
} else {
  menu.classList.remove("menu-mobile");
}
