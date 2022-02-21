let div = document.querySelector('[data-cor]');
// console.log(Object.prototype.toString.call(div));
div.dataset.height = 1000;

delete div.dataset.width;

div.dataset.totalHeight = 2000;

console.log(div.dataset)
