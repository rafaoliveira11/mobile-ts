import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n1 = Number(prompt("Digite a primeira nota: "));
const n2 = Number(prompt("Digite a segunda nota: "));

const notaFinal = n1 + n2;

console.log(`NOTA FINAL = ${notaFinal.toFixed(1)}`);

if(notaFinal < 60.00) {
    console.log("REPROVADO :( ");
}