const pessoa = {
  nome: "Malcon",
  idade: 19,
};
console.log(pessoa);

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },

  perimetro(lado) {
    const lados = this.lados;
    return lado * lados;
  },

  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
