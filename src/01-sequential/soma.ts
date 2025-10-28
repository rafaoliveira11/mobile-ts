import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Digite o valor de X: ");
const x = Number(prompt("X: "));

console.log("Digite o valor de Y: ");
const y = Number(prompt("Y: "));

const soma = (x + y);
console.log(` SOMA: ${soma.toFixed(1)}`);