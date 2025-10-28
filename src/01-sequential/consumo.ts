import promptSync from 'prompt-sync';
const prompt = promptSync();

const distancia = Number(prompt("Distância percorrida: "));

const combustivel = Number(prompt("Combustível gasto: "));

const cons_medio = distancia / combustivel; 

console.log(`Consumo médio = ${cons_medio.toFixed(3)}`); 
