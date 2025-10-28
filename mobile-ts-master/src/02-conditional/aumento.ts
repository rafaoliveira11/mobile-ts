import promptSync from 'prompt-sync';
const prompt = promptSync();

const salarioAtual = Number(prompt("Digite o salario da pessoa: "));

let percentual = 0;
let aumento = 0;
let novoSalario = 0;

if (salarioAtual <= 1000.00) {
    percentual = 20;
} else if (salarioAtual <= 3000.00) {
    
    percentual = 15;
} else if (salarioAtual <= 8000.00) {

    percentual = 10;
} else {
    
    percentual = 5;
}

aumento = salarioAtual * percentual / 100.0;
novoSalario = salarioAtual + aumento;

console.log(`Novo salario = R$ ${novoSalario.toFixed(2)}`);
console.log(`Aumento = R$ ${aumento.toFixed(2)}`);
console.log(`Porcentagem = ${percentual} %`);