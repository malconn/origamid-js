// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

const dataShowDown = document.querySelectorAll('.animais-lista li');
const dataShowRight = document.querySelectorAll('.animais-descricao section')
dataShowDown.forEach((down)=>{
  down.setAttribute('data-anime','show-down');
})
dataShowRight.forEach((right)=>{
  right.setAttribute('data-anime','show-right');
})

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
const substitute = document.querySelectorAll('[class*="js-"]');
substitute.forEach((js)=>{
  js.setAttribute('data-js',js.className)
  console.log(js)
})
