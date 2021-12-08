const menu = document.querySelector(".menu");
menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
console.log(menu.classList);

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");
console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

img.setAttribute("alt", "Raposa");

const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);
console.log(img.getAttribute("alt"));

const carro = {
  portas: 4,
  andar: (km) => {
    console.log(`Andou ${km}km!`);
  },
};
