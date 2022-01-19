// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
  const numeroLimpo = +transacao.valor.replace("R$", "");

  if (transacao.descricao.slice(0, 4) === "Taxa") {
    return (taxaTotal += numeroLimpo);
  } else {
    return (recebimentoTotal += numeroLimpo);
  }
});
// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");

// console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a").toLowerCase();

// console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

const finalCaractere = frase.slice(-1);

// console.log(finalCaractere);
// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let taxasTotal = 0;
transacoes2.forEach((transacao) => {
  transacao = transacao.trimStart().toLowerCase().slice(0, 4);
  if (transacao === "taxa") {
    return taxasTotal++;
  }
});

console.log(taxasTotal);
