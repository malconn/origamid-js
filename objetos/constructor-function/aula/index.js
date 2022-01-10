// const Dom = {
//   seletor: "li",

//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     return this.element().classList.add("ativar");
//   },
// };
function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  };

  this.ativar = () => {
    return this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar();
