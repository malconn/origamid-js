const img = document.querySelector('img');


function callBack(event){
  console.log(event)
}


// img.addEventListener('click', callBack);


const animaisLista = document.querySelector('.animais-lista');

function callBackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}


animaisLista.addEventListener('click', callBackLista)


const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  event.preventDefault();

  console.log(event.currentTarget)
  console.log(this)
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event.type, event)
}


// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('scroll', handleEvent)
function handleKeyboard(event){
  if(event.key === 'f'){
    document.body.classList.toggle('fullscreen-azul')
  }
  console.log(event.key)
}
window.addEventListener('keydown', handleKeyboard)

