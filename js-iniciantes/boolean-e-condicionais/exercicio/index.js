// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
function verifyIdades() {
  let myIdade = 18;
  let myParentIdade = 39;

  if (myIdade === myParentIdade) {
    console.log("É igual");
  } else if (myIdade < myParentIdade) {
    console.log("É menor");
  } else {
    console.log("É maior");
  }
}

verifyIdades();
// Qual valor é retornado na seguinte expressão?

var expressao = 5 - 2 && 5 - " " && 5 - 2; //3
console.log(expressao);//ele retorna o primeiro false ou o último true

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
function verifyHabitantes(){
  var brasil = 207;
  var china = 1340;
  
  if (brasil === china) {
    console.log("É igual o número de habitantes ");
  } else if (brasil < china) {
    console.log("É menor o número de habitantes ");
  } else {
    console.log("É maior o número de habitantes ");
  }
}


verifyHabitantes();
// O que irá aparecer no console?

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} //Falso

// O que irá aparecer no console?

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} //Cão