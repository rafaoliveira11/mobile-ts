import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite as tres distancias:");
const d1 = Number(prompt(""));
const d2 = Number(prompt(""));
const d3 = Number(prompt(""));

let maior = d1;

if (d2 > maior) {
    maior = d2;
}

if (d3 > maior) {
    maior = d3;
}

console.log(`MAIOR DISTANCIA = ${maior.toFixed(2)}`);