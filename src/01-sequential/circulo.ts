import promptSync from 'prompt-sync';
const prompt = promptSync();

const raio = Number(prompt("Digite o valor do raio do circulo: "));

const PI = 3.14159;

const area = PI * Math.pow(raio, 2);

console.log(`AREA = ${area.toFixed(3)}`);
