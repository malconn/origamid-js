// Adicione a classe ativo a todos os itens do menu
const menuAll = document.querySelectorAll(".menu a");

menuAll.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuAll.forEach((item)=>{
  item.classList.remove('ativo');
})

menuAll[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt

const verifyAltAttr = document.querySelectorAll("img");

verifyAltAttr.forEach((item) => {
  const cadaAlt = item.hasAttribute("alt");

  console.log(cadaAlt);
});
// Modifique o href do link externo no menu
const menuLinkExterno = document.querySelector('a[href^="https://"]');

console.log(menuLinkExterno);

menuLinkExterno.setAttribute("href", "https://youtube.com");
