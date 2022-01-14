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
transacoes.forEach((transacao) => {
  const removeValue = transacao.valor.substring(transacao.valor.length);

  transacao.valor = removeValue;

  console.log(transacao);
});
// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");

console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const removeSpan = html.split("span");

const replaceSpanToa = removeSpan.join("a");

console.log(replaceSpanToa);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

const finalCaractere = frase[frase.length - 1];

console.log(finalCaractere);
// Retorne o total de taxas
// const transacoes = [
//   "Taxa do Banco",
//   "   TAXA DO PÃO",
//   "  taxa do mercado",
//   "depósito Bancário",
//   "TARIFA especial",
// ];
