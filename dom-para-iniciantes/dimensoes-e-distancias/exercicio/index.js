// Verifique a distância da primeira imagem
// em relação ao topo da página
const topo = document.querySelector("img");

const topImg = topo.getBoundingClientRect().top;

console.log(topImg);

// Retorne a soma da largura de todas as imagens
window.onload = () => {
  const todas = document.querySelectorAll("img");
  todas.forEach((img) => {
    let widthImg = img.offsetWidth;

    let soma = 0;

    soma += widthImg;

    console.log(parseInt(soma));
  });
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const verifySize = document.querySelectorAll("a");

verifySize.forEach((item) => {
  const width = item.offsetWidth;
  const height = item.offsetHeight;
  console.log(width, height);
  if (width >= 48 && height >= 48) {
    console.log(item, "possui acessibilidade");
  } else {
    console.log(item, "não possui boa acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");

if (window.matchMedia("(max-width:720px)").matches) {
  menu.classList.add("menu-mobile");
}
