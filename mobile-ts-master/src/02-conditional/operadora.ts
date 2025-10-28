import promptSync from 'prompt-sync';
const prompt = promptSync();

const minutos = Number(prompt("Digite a quantidade de minutos: "));

let valorAPagar = 0;

const precoBase = 50.00;
const franquia = 100;
const custoExtraPorMinuto = 2.00;

if (minutos <= franquia) {
    valorAPagar = precoBase;
} else {

    const minutosExtras = minutos - franquia;
    const custoExtras = minutosExtras * custoExtraPorMinuto;
    valorAPagar = precoBase + custoExtras;
}
console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);