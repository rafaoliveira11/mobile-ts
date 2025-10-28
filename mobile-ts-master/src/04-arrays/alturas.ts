import PromptSync from "prompt-sync";
const prompt = PromptSync();

let soma_altura = 0, menor = 0;

const qtd_pessoas = Number(prompt("Quantas pessoas serão digitadas? "));
const nomes = [];
const idades: number [] = [];
const alturas: number [] = [];

for (let i = 0; i < qtd_pessoas; i++) {
    console.log(`Dados da ${i+1}a pessoa: `);

    const nome = prompt("Nome: ");
    nomes.push(nome);

    const idade = Number(prompt("Idade:"));
    if (idade < 16) {
        menor++;
    }
    idades.push(idade);

    const altura = Number(prompt("Altura: "));
    soma_altura+=altura;
    alturas.push(altura);
}

console.log();

const altura_med = soma_altura / qtd_pessoas;
console.log("Altura média: " + altura_med.toFixed(2));

const menores = menor / qtd_pessoas *100;
console.log("Pessoas com menos de 16 anos: " + menores.toFixed(1) + " %");

for (let i = 0; i < qtd_pessoas; i++) {
    if (Number(idades[i]) < 16) {
        console.log(nomes[i]);
    }
}