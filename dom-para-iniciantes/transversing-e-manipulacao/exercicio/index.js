// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)


// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const ddFromDt = primeiroDt.parentElement.children[1];

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

const innerHTML = faq.innerHTML = animais.innerHTML;
