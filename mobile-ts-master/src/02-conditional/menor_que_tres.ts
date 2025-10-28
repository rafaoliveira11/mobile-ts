import promptSync from 'prompt-sync';
const prompt = promptSync();

const valor1 = Number(prompt("Primeiro valor: "));
const valor2 = Number(prompt("Segundo valor: "));
const valor3 = Number(prompt("Terceiro valor: "));

let menor = valor1;

if (valor2 < menor) {

    menor = valor2;
}

if (valor3 < menor) {

    menor = valor3;
}
console.log(`MENOR = ${menor}`);