// nomeie 3 propriedades ou métodos de strings
const stringName = 'Malcon';
stringName.toLocaleLowerCase()
stringName.toLocaleUpperCase()
stringName.length

// nomeie 5 propriedades ou métodos de elementos do DOM
const testeDom =  document.querySelector('.teste-btn');

const testeDomontoggle = testeDom.ontoggle;
const testeDomonsubmit = testeDom.onsubmit;
const testeDomondragover = testeDom.ondragover;
const testeDomondragstart = testeDom.ondragstart
const testeDominnerText =  testeDom.innerText;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//PEGANDO O INPUT 
const textToCopy = document.querySelector('#toCopy');
const valueInput = textToCopy.value;

// NO CLIQUE EU VOU COPIAR E JOGAR NO ALERT
const clipBoard = testeDom.addEventListener('click', ()=>{

  // PEGANDO O TEXTO DO INPUT
  const textCopied = textToCopy.select();


  // COPIANDO O CONTEÚDO DE TEXTCOPY
  const copyign = navigator.clipboard.writeText(valueInput);

  alert(valueInput)
})