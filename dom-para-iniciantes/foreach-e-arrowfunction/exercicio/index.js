// Mostre no console cada parágrado do site
  const cadaP  = document.querySelectorAll('p');

  cadaP.forEach((p)=>{
    console.log(p)
  })
// Mostre o texto dos parágrafos no console

cadaP.forEach((pText)=>{
  console.log(pText.innerText);
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(()=> {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));

