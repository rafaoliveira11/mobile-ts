import promptSync from "prompt-sync";
const prompt = promptSync();

const largura = Number(prompt("Digite a largura do terreno:"));
const comprimento = Number(prompt("Digite a comprimento do terreno:"));
const valorM2 = Number(prompt("Digite a valor do terreno:"));

const area = largura * comprimento;
const preco = area * valorM2;

console.log(`Area do terreno = ${area.toFixed(2)}`);
console.log(`´Preco do terrreno = ${preco.toFixed(2)}`); 
