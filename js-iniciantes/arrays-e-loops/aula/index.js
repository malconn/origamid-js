const videoGames = ["switch", "ps4", "xbox", "3DS"];

for (let numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

let i = 0;

while (i <= 10) {
  console.log(i);
  i = i + 5;
}

for (let item = 0; item < videoGames.length; item++) {
  if (videoGames[item] === "ps4") {
    break;
  }
  console.log(videoGames[item]);
}
let frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
