// Liste 5 objetos nativos
Object
String
Array
Function
Number
Math
// Liste 5 objetos do browser
Window
Document
HTMLCollection
NodeList
AbortController
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitCancelFullScreen !== 'undefined' || typeof document.webkitExitFullscreen !== 'undefined'){
  console.log('Existe')
}