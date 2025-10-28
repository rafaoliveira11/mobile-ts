import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt("Preço unitário do produto: "));

const qtd_comprada = Number(prompt("Quantidade comprada: "));

const dinheiro = Number(prompt("Dinheiro recebido: "));

const total = preco * qtd_comprada;
const troco = dinheiro - total;

console.log(`TROCO = ${troco.toFixed(2)}`);
