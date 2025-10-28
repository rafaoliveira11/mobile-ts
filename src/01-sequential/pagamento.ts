import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = String(prompt("Digite seu nome: "));

const v_hora = Number(prompt("Valor por hora: "));

const h_trab = Number(prompt("Horas trabalhadas: "));

const pgto = v_hora * h_trab 
console.log(`O pagamento para ${nome} deve ser ${pgto.toFixed(2)}`); 