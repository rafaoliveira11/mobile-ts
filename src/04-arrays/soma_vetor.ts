import PromptSync from "prompt-sync";
const prompt = PromptSync();

const valores: number [] = [];
let soma = 0;
let media = 0;

const qtd_num = Number(prompt("Quantos números voce vai digitar? "));

for (let i = 0; i < qtd_num; i++) {
    const n= Number(prompt("Digite um número: "));
    valores.push(n);
    soma+=n;
}

console.log("VALORES = " + valores.join(" "));

media = soma / qtd_num;

 
console.log("SOMA = " + soma.toFixed(2));
console.log("MEDIA =  " + media.toFixed(2));